import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.scss']
})
export class AddMovieDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddMovieDialogComponent>) {}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
