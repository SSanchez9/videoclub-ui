import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './features/popular/popular.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PopularComponent,
    MovieInfoComponent,
    MovieDetailsComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule,
    MatInputModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
