import { Component, OnInit } from '@angular/core';
import { MovieListApiService } from '../services/movie-list-api.service';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
  listOfLists: any[];
  constructor(private api: MovieListApiService) { }

  ngOnInit() {
    this.api.getLists().subscribe((list) =>
      this.listOfLists = list
    );
  }

}
