import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private http: HttpClient) { }


   getMovies(title: string): Observable<any[]>{
    return this.http.get<any>(`http://www.omdbapi.com/?s=${title}&apikey=d9ce8649`).pipe(
      map((data) => data.Search)
    );
  }
}
