import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListListComponent } from './list-list/list-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ListFormComponent } from './list-form/list-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { AverageRatingPipe } from './pipes/average-rating.pipe';
import { MovieComponent } from './movie/movie.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ListListComponent,
    MovieListComponent,
    ListFormComponent,
    SearchComponent,
    AverageRatingPipe,
    MovieComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ListFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
