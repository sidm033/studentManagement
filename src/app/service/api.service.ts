import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { AddStudent } from '../helpers/student';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({ 'User-Agent': 'googlebot', 'Content-Type':'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);

  }

  addStudent(params: AddStudent) {
    return this.http.post<any>(`${environment.apiConfig.apiUrl}People`, 
    params, {  headers: this.headers })
    .pipe(catchError(this.handleError));
  }

}
