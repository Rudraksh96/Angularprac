
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
registerUrl = environment.resigterUrl;
loginUrl = environment.loginUrl;
 
constructor(private httpClient: HttpClient) { }
registerUser(userObj: any): Observable<any> {
  debugger;
  return this.httpClient.post(this.registerUrl, userObj) .pipe (
    retry (1),
    catchError(this.handleError)
  )}
  loginUser(loginObj:any): Observable<any> {
    debugger;
    return this.httpClient.post(this.loginUrl, loginObj) .pipe (
      retry (1),
      catchError(this.handleError)
    )}
// getEmployees(): Observable<any> {
//   return this.httpClient.get(this.employee_api_url)
//   .pipe(
//     catchError(this.handleError)
//   )

// }
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
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // if error is client-side error
    errorMessage = `Error: ${error.message}`;
  } else {
    // if error is server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  alert(errorMessage);
  return throwError(errorMessage);
};

}


