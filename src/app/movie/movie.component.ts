import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieListApiService } from '../services/movie-list-api.service';
import { AppService } from '../services/app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() showAdd: boolean;
  @Input() showDelete: boolean;

  constructor(private api: MovieListApiService, private app: AppService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  saveRating(value) {
    this.movie.rating = value;
    this.api.rateMovie(this.movie).subscribe((movie) => {
      this.movie = movie;
      this.api.getLists().subscribe((lists) => this.app.movieLists = lists);
    });
  }

  addToCurrentList() {
    this.api.addMovieToList(this.movie, this.app.currentMovieList)
      .subscribe((movie) => {
        this.app.addToMovieList(movie, this.app.currentMovieListIndex);
      });
  }
  removeFromCurrentList() {
    this.api.removeMovieFromList(this.movie.id, this.app.currentMovieList.id)
      .subscribe((movie) => this.app.removeMovieFromList(movie, this.app.currentMovieListIndex));
  }

  displayAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.backdropClass = 'backdrop-for-adding';
    dialogConfig.hasBackdrop = true;
    this.app.movieBeingAdded = this.movie;
    const dialogRef = this.dialog.open(AddMovieDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.app.movieBeingAdded = null;
    });
  }

}
