import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = '';
  constructor(private app: AppService, private imdb: ImdbService) { }

  ngOnInit() {
  }

  search() {
    this.app.search = this.title;
  }

}
