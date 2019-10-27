import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { List } from '../interfaces/list';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly _currentMovieList = new BehaviorSubject<List>({ id: 0, name: '' });
  readonly currentMovieList$ = this._currentMovieList.asObservable();

  private readonly _movieLists = new BehaviorSubject<List[]>([]);
  readonly movieLists$ = this._movieLists.asObservable();

  private readonly _currentMovieListIndex = new BehaviorSubject<number>(null);
  readonly currentMovieListIndex$ = this._currentMovieListIndex.asObservable();

  private readonly _filter = new BehaviorSubject<string>('');
  readonly filter$ = this._filter.asObservable();

  private readonly _sortBy = new BehaviorSubject<string>('title-asc');
  readonly sortBy$ = this._sortBy.asObservable();

  private readonly _search = new BehaviorSubject<string>('');
  readonly search$ = this._search.asObservable();

  readonly filteredMovieList$ = this.currentMovieList$.pipe(
    // map((movieList: List) => movieList.movies = movieList.movies.filter((movie) => movie.title.toLowerCase().includes(this.filter)))
    map((movieList: List) => {
      let filteredMovies: Movie[];
      if (movieList && movieList.movies) {
        filteredMovies = movieList.movies.filter((movie) => movie.title.toLowerCase().includes(this.filter.toLowerCase()));
        const sortValues = this.sortBy.split('-'); // Separate the key and the order
        filteredMovies = filteredMovies.sort(this.compareValues(sortValues[0], sortValues[1]));
      } else {
        filteredMovies = [];
      }

      return [...filteredMovies];
    })

  );


  constructor() { }

  get search(): string {
    return this._search.getValue();
  }
  set search(val: string) {
    this._search.next(val);
  }

  get sortBy(): string {
    return this._sortBy.getValue();
  }

  set sortBy(val: string) {
    this._sortBy.next(val);
    this.currentMovieList = { ...this.currentMovieList };
  }


  get filter(): string {
    return this._filter.getValue();
  }
  set filter(val: string) {
    this._filter.next(val);
    this.currentMovieList = { ...this.currentMovieList };
  }


  get movieLists(): List[] {
    return this._movieLists.getValue();
  }
  set movieLists(val: List[]) {
    this.currentMovieList = val[this.currentMovieListIndex];
    this._movieLists.next(val);
  }

  get currentMovieListIndex(): number {
    return this._currentMovieListIndex.getValue();
  }
  set currentMovieListIndex(index: number) {
    this.search = '';
    this.currentMovieList = this.movieLists[index];
    this._currentMovieListIndex.next(index);
  }

  get currentMovieList(): List {
    return this.movieLists[this.currentMovieListIndex];
  }
  set currentMovieList(val: List) {
    this._currentMovieList.next(val);
  }


  addToMovieList(movie: Movie, listIndex: number) {
    if (movie) {
      const newMovieList = { ...this.movieLists[listIndex] };
      newMovieList.movies.push(movie);
      this.movieLists = [...this.movieLists];
      this.movieLists[listIndex] = newMovieList;
    }

  }

  removeMovieFromList(movie: Movie, listIndex: number) {
    if (movie) {
      const newMovieList = { ...this.movieLists[listIndex] };
      this.movieLists = [...this.movieLists];
      this.movieLists[listIndex].movies = newMovieList.movies.filter((originalMovie) => originalMovie.imdb_id !== movie.imdb_id);
      this.movieLists = [...this.movieLists];
    }

  }

  compareValues(key, order = 'asc') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
