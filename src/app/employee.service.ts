import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee_api_url: string = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';

  constructor(private httpClient: HttpClient) { }
  // createEmployee(employee: any): Observable<any> {
  //   return this.httpClient.post(this.employee_api_url + '/create', employee).pipe(
  //     catchError(this.handleError)
  //   )
    

  // }
  getEmployees(): Observable<any> {
    return this.httpClient.get(this.employee_api_url)
    .pipe(
      catchError(this.handleError)
    )

  }
  // updateEmployee(employee: any): Observable<any> {
  //   return this.httpClient.get(this.employee_api_url + '/update')
  //     .pipe(map((resp: any) => resp.json()),
  //       catchError(error => this.throwError(error))
  //     )

  // }
  // deleteEmployee(id: number): Observable<any> {
  //   return this.httpClient.delete(this.employee_api_url + '/delete/{id}')
  //     .pipe(map((resp: any) => resp.json()),
  //       catchError(error => this.throwError(error))
  //     )

  // }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}


