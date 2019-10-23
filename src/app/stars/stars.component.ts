import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: number;
  @Input() buttons: boolean;
  @Output() vote = new EventEmitter<number>();
  values = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }
  starType(value: number): string {
    if (value < this.rating && value > this.rating - 1 ) {
      return 'star_half';
    }
    if ( value <= this.rating) {
      return 'star';
    }
    return 'star_border';
  }
  starSelected(value) {
    if (this.buttons) {
      this.vote.emit(value);
    }
  }
}
