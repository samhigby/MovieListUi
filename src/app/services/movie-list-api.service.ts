import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { List } from '../interfaces/list';
import { Movie } from '../interfaces/movie';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieListApiService {

  // selectedList: List;

  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiUrl}lists`);
  }

  addList(list: List): Observable<List> {
    return this.http.post<List>(`${environment.apiUrl}lists`, list);
  }

  getMovie(imdbId: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}movies/${imdbId}`);
  }

  rateMovie(movie: Movie): Observable<Movie> {
    const movieId = movie.id ? movie.id : 0;
    return this.http.put<Movie>(`${environment.apiUrl}movies/${movieId}`, movie);
  }

  addMovieToList(movie: Movie, list: List): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiUrl}lists/${list.id}/movies`, movie);
  }
  removeMovieFromList(movieId: number, listId: number): Observable<List> {
    return this.http.delete<List>(`${environment.apiUrl}lists/${listId}/movies/${movieId}`);
  }
  updateMovieList(list: List): Observable<List> {
    return this.http.put<List>(`${environment.apiUrl}lists/${list.id}`, list);
  }
}
