import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieListApiService } from '../services/movie-list-api.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() showAdd: boolean;
  @Input() showDelete: boolean;

  constructor(private api: MovieListApiService, private app: AppService) { }

  ngOnInit() {
  }

  saveRating(value) {
    this.movie.rating = value;
    this.api.rateMovie(this.movie).subscribe((movie) => {
      this.movie = movie;
      this.api.getLists().subscribe((lists) => this.app.movieLists = lists);
    });
  }

  addToCurrentList() {
    this.api.addMovieToList(this.movie, this.app.currentMovieList)
      .subscribe((movie) => {
        this.app.addToMovieList(movie, this.app.currentMovieListIndex);
      });
  }
  removeFromCurrentList() {
    this.api.removeMovieFromList(this.movie.id, this.app.currentMovieList.id)
      .subscribe((movie) => this.app.removeMovieFromList(movie, this.app.currentMovieListIndex));
  }

  selectOption(e) {
    const selected = (e.currentTarget.getAttribute('aria-selected') === 'false');
    const index = parseInt(e.currentTarget.getAttribute('ng-reflect-value'), 10);

    if (selected) {
          this.api.addMovieToList(this.movie, this.app.movieLists[index])
        .subscribe((movie) => {
          this.app.addToMovieList(movie, index);
        });
    }
    // This does not work with the change detection since it doesn't have a movie.id yet
    // Out of project scope
    // else {
    //   this.api.removeMovieFromList(this.movie.id, index)
    //   .subscribe((movie) => this.app.removeMovieFromList(movie, index));
    // }

  }



}
