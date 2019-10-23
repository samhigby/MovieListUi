import { Component, OnInit } from '@angular/core';
import { MovieListApiService } from '../services/movie-list-api.service';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
  listOfLists: List[];
  constructor(private api: MovieListApiService) { }

  ngOnInit() {
    this.api.getLists().subscribe((list: List[]) =>
      this.listOfLists = list
    );
  }

  open(list) {
    console.log(list);
  }

}
