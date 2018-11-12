import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import { Employee } from './employee';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url = "https://floating-bayou-71862.herokuapp.com";

  constructor(private http: HttpClient) { }




  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`)
  }
}


