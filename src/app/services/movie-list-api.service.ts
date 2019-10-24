import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { List } from '../interfaces/list';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieListApiService {

  selectedList: List;

  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiUrl}lists`);
  }

  addList(list: List): Observable<List> {
    return this.http.post<List>(`${environment.apiUrl}lists`, list);
  }

  addMovieToList(movie: Movie, listId: number): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiUrl}lists/${listId}`, movie);
  }
}
