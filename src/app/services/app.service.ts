import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly _currentMovieList = new BehaviorSubject<List>({ id: 0, name: ''});
  readonly currentMovieList$ = this._currentMovieList.asObservable();

  private readonly _movieLists = new BehaviorSubject<List[]>([]);
  readonly movieLists$ = this._movieLists.asObservable();

  private readonly _currentMovieListIndex = new BehaviorSubject<number>(null);
  readonly currentMovieListIndex$ = this._currentMovieListIndex.asObservable();


  constructor() { }

  get movieLists(): List[] {
    return this._movieLists.getValue();
  }

  set movieLists(val: List[]) {
    this._movieLists.next(val);
  }

  get currentMovieListIndex(): number {
    return this._currentMovieListIndex.getValue();
  }

  set currentMovieListIndex(index: number) {
    this._currentMovieListIndex.next(index);
  }
  get currentMovieList(): List {
    return this._movieLists.getValue()[this._currentMovieListIndex.getValue()];
   // return this._currentMovieList.getValue();
  }

  set currentMovieList(val: List) {
    this._currentMovieList.next(val);
  }
}
