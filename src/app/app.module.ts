import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './modules/movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './core/state/movies/movies.reducer';
import { MoviesEffects } from './core/state/movies/movies.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MovieService } from './core/state/movies/services/movie.service';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ movie: movieReducer }),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
    NgbModule,
    NgCircleProgressModule.forRoot({
      radius: 61,
    }),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
