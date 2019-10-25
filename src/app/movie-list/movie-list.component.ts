import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../services/app.service';
import { Movie } from '../interfaces/movie';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  currentMovieList: List;
  filteredMovieList: List;
  filter = '';
  sort = 'title';


  constructor(private app: AppService) { }

  ngOnInit() {

    this.app.currentMovieListIndex$.subscribe((index) => {
      if (index !== null) {
        this.app.movieLists$.subscribe((list) => {
          this.currentMovieList = list[index];
          this.filteredMovieList = { ...this.currentMovieList };
          this.applyFilter();
          this.sortBy();
        });
      }
    });

    this.app.currentMovieList$.subscribe((movieList) => {
      this.filteredMovieList = { ...movieList };
      this.applyFilter();
      this.sortBy();
    })
  }

  applyFilter() {
    if (this.currentMovieList) {
      this.filteredMovieList.movies = this.currentMovieList.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.filter.toLowerCase());
      });
    }

  }

  sortBy() {
    if (this.currentMovieList) {
      this.filteredMovieList.movies = this.filteredMovieList.movies.sort(this.compareValues(this.sort));
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
