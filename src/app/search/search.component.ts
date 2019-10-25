import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../services/imdb.service';
import { MovieListApiService } from '../services/movie-list-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = '';
  movies: any[];
  constructor(private imdb: ImdbService, private api: MovieListApiService) { }

  ngOnInit() {
  }

  search() {
    // add title check to make sure it is not blank
    this.imdb.getMovies(this.title).subscribe((movies) => {
      this.movies = movies;

      // Get the ratings and map them to the imdb movie list
      this.movies.map((movie) => {
        this.api.getMovie(movie.imdbId).subscribe((apiMovie) => {
          if (apiMovie) {
            this.movies.find((m) => {
              if (m.imdbId === apiMovie.imdb_id) {
                m.rating = apiMovie.rating;
              }
            });
          }
        });
      });
    }
    );
  }

}
