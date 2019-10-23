import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
 @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

  onVote(value) {
    // !!!!!!!!!!need to save rating to the backend
    this.movie.rating = value;
  }

}
