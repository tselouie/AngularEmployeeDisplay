import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './data/employee.service';
import { Employee } from './data/employee';
import { Observable } from "rxjs";


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;
  constructor(private e: EmployeeService) { }

  ngOnInit() {

    this.e.getEmployees().subscribe(
      employees => this.employees = employees,
      err => this.loadingError = true);
    if (this.loadingError) {
      console.log("An error has occurred.");
    }
    this.getEmployeesSub = this.employees;


  }
  ngOnDestroy() {
    if (this.getEmployeesSub) { this.getEmployeesSub.unsubscribe(); }
  }

}
