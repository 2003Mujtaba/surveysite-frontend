import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurveys(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/surveys').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  deleteSurvey(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/surveys/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  getSurvey(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/surveys/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  updateSurvey(id: string, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/surveys/${id}`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }


}