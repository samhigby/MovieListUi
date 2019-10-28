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
  listOfLists: List[];
  filter = '';
  sort = 'title';


  constructor(public app: AppService) { }

  ngOnInit() {
    this.app.currentMovieList$.subscribe((list) => {
      this.currentMovieList = list;
    });
  }
}
