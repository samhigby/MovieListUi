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
  constructor(private api: MovieListApiService, private app: AppService) { }

  ngOnInit() {
  }

  onVote(value) {
    // !!!!!!!!!!need to save rating to the backend
    this.movie.rating = value;
  }

  addToCurrentList() {
    this.api.addMovieToList(this.movie, this.app.currentMovieList.id).subscribe((movie) => this.app.currentMovieList.movies.push(movie));
  }

}
