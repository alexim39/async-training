import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserInterface } from '../_common/services/user.service';

@Injectable()
export class AuthApiService {
  // Define API
  apiURL = 'https://asynctrainingapi4-x0bw8fkh.b4a.run';
  //apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Error handling
  handleError(error: any) {
    let errorMessage: {code: string, message: string};
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = {'code': error.status, 'message': error.message};
    }
    //window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  // user sign in
  signIn(formObject: {email: string, password: string}): Observable<UserInterface> {
    return this.http
      .post<UserInterface>(this.apiURL + '/users/signin', formObject, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  }

  // user sign up
  signUp(formObject: {email: string, password: string}): Observable<UserInterface> {
    return this.http
      .post<UserInterface>(this.apiURL + '/users/signup', formObject, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  }

  // user sign out
  signOut(formObject: {}): Observable<UserInterface> {
    return this.http
      .post<UserInterface>(this.apiURL + '/users/signout', formObject, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  }
}