import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { List } from '../interfaces/list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ListFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: List) {}

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
