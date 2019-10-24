import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly _currentMovieList = new BehaviorSubject<List>({name: ''});
  readonly currentMovieList$ = this._currentMovieList.asObservable();

  constructor() { }

  get currentMovieList(): List {
    return this._currentMovieList.getValue();
  }

  set currentMovieList(val: List) {
    this._currentMovieList.next(val);
  }
}
