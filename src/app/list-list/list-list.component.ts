import { Component, OnInit } from '@angular/core';
import { MovieListApiService } from '../services/movie-list-api.service';
import { List } from '../interfaces/list';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListFormComponent } from '../list-form/list-form.component';
import { AppService } from '../services/app.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
  listOfLists: List[];
  movieBeingAdded: Movie;
  constructor(private api: MovieListApiService, public dialog: MatDialog,
              private app: AppService) { }

  ngOnInit() {
    this.app.movieLists$.subscribe((list) => this.listOfLists = list);
    this.api.getLists().subscribe((list: List[]) =>
      this.app.movieLists = list
    );
    this.app.movieBeingAdded$.subscribe((movie) => {
      this.movieBeingAdded = movie;
    });
  }

  openList(index: number) {
    if (this.movieBeingAdded !== null) {
      this.api.addMovieToList(this.movieBeingAdded, this.app.movieLists[index])
      .subscribe((movie) => {
        this.app.addToMovieList(movie, index);
      });
    } else {
      this.app.currentMovieListIndex = index;
    }
  }
  openForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(ListFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: List) => {
      if (result) {
        this.api.addList(result).subscribe((list) => this.listOfLists.push({movies: [], ...list}));
      }
    });
  }

}
