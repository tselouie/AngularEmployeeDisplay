import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './data/employee.service';
import { Employee } from './data/employee';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;
  filteredEmployees: Employee[];
  constructor(private e: EmployeeService, private router: Router) { }



  ngOnInit() {

    this.getEmployeesSub = this.e.getEmployees().subscribe(
      employees => {
      this.employees = employees;
        this.filteredEmployees = employees;
      },
      () => {
        this.loadingError = true;
      })


  }
  ngOnDestroy() {
    if (this.getEmployeesSub) { this.getEmployeesSub.unsubscribe(); }
  }

  routeEmployee(id: string) {
    this.router.navigate(["/employee", id]
    );
  }
  onEmployeeSearchKeyUP(event: any) {

    this.filteredEmployees = this.employees.filter(emp =>
      emp.FirstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      emp.LastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      emp.Position.PositionName.toLowerCase().includes(event.target.value.toLowerCase()));

  }



}
