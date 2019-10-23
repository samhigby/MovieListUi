import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as camelcaseKeys from 'camelcase-keys';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private http: HttpClient) { }

  getMovies(title: string): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?s=${title}&apikey=d9ce8649`).pipe(
      map((data) => {
        if (data.Error) {
          return [];
        }
        return camelcaseKeys(data.Search);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}


