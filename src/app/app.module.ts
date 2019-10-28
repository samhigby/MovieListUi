import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddMovieDialogComponent } from './add-movie-dialog/add-movie-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListListComponent,
    MovieListComponent,
    ListFormComponent,
    SearchComponent,
    AverageRatingPipe,
    MovieComponent,
    StarsComponent,
    ToolbarComponent,
    AddMovieDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ListFormComponent, AddMovieDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
