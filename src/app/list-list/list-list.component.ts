import { Component, OnInit } from '@angular/core';
import { MovieListApiService } from '../services/movie-list-api.service';
import { List } from '../interfaces/list';
import { MatDialog } from '@angular/material/dialog';
import { ListFormComponent } from '../list-form/list-form.component';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
  listOfLists: List[];
  constructor(private api: MovieListApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getLists().subscribe((list: List[]) =>
      this.listOfLists = list
    );
  }

  openList(list) {
    console.log(list);
  }
  openForm() {
    const dialogRef = this.dialog.open(ListFormComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: List) => {
      if (result) {
        this.api.addList(result).subscribe((list) => this.listOfLists.push({movies: [], ...list}));
      }
    });
  }

}
