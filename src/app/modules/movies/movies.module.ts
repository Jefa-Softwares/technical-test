import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AppHomeComponent } from './core/app-home/app-home.component';
import { AppDetailComponent } from './components/app-detail/app-detail.component';
import { AppSearchBarComponent } from './components/app-search-bar/app-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageContainerComponent } from './components/app-detail/containers/image-container/image-container.component';
import { MovieDetailComponent } from './components/app-detail/containers/movie-detail/movie-detail.component';
import { FormMovieComponent } from './components/app-detail/containers/form-movie/form-movie.component';

@NgModule({
  declarations: [
    AppHomeComponent,
    AppDetailComponent,
    AppSearchBarComponent,
    ImageContainerComponent,
    MovieDetailComponent,
    FormMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MoviesModule {}
