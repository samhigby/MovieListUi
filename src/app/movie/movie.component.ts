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
    .subscribe((movie) => movie ? this.app.currentMovieList.movies.push(movie) : null);
  }
  removeFromCurrentList() {
    this.api.removeMovieFromList(this.movie.id, this.app.currentMovieList.id)
    .subscribe((list) => list ? this.app.currentMovieList = list : null);
  }

}
