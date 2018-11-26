import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url = "https://floating-bayou-71862.herokuapp.com";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }  
  
  getEmployee(id:string): Observable<EmployeeRaw[]>{
    return this.http.get<EmployeeRaw[]>(`${this.url}/employee-raw/${id}`);
  }

  saveEmployee(employee: EmployeeRaw) : Observable<any>{
    return this.http.put<any>(`${this.url}/employee/${employee._id}`, employee);

  }



  
}


