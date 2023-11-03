import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CourseInterface } from './course.interface';

@Injectable()
export class CourseService {
  // Define API
  //apiURL = 'http://localhost:3000';
  apiURL = 'https://asynctrainingapi4-x0bw8fkh.b4a.run';
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

  // get all courses
  getCourses(): Observable<Array<CourseInterface>> {
    return this.http
      .get<Array<CourseInterface>>(this.apiURL + '/courses', { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  }

  // get a course
  getCourse(id: string): Observable<CourseInterface> {
    return this.http
      .get<CourseInterface>(this.apiURL + `/courses/${id}`, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  }

  /* // get all user registered course
  getMyCourse(id: string): Observable<CourseInterface[]> {
    return this.http
      .get<Array<CourseInterface>>(this.apiURL + `/courses/${id}`, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError));
  } */

 
}