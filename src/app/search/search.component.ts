import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = '';
  movies: any[];
  constructor(private imdb: ImdbService) { }

  ngOnInit() {
  }

  search() {
    // add title check to make sure it is not blank
    this.imdb.getMovies(this.title).subscribe((movies) =>
    this.movies = movies
    );
  }

}
