import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from './data/employeeRaw';
import { EmployeeService } from './data/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from './data/position.service';
import { Position } from './data/position';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubscription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private es: EmployeeService, private ar: ActivatedRoute, private ps: PositionService) { }

  ngOnInit() {

    this.paramSubscription = this.ar.params.subscribe(params => {

      this.employeeSubscription = this.es.getEmployee(params['_id']).subscribe(empData => {
  
        this.employee = empData[0];

        this.getPositionsSubscription = this.ps.getPositions().subscribe(posData => {

          this.positions = posData;

        });
      });
    });

  }

  onSubmit(f: NgForm): void {
    this.saveEmployeeSubscription = this.es.saveEmployee(this.employee).subscribe(() => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500)
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });

  }
  ngOnDestroy() {
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionsSubscription) { this.getPositionsSubscription.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }
}
