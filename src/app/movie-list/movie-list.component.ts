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
  constructor(private app: AppService) { }

  ngOnInit() {

    this.app.currentMovieListIndex$.subscribe((index) => {
      if (index !== null) {
        this.app.movieLists$.subscribe((list) => {
          this.currentMovieList = list[index];
        });
      }
    });
  }

}
