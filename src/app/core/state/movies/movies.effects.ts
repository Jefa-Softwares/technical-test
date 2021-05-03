import { loadMovie, loadMovieSuccess } from './movies.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from './services/movie.service';

@Injectable()
export class MoviesEffects {
  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovie),
      concatMap((action) => this.movieService.getMovie(action.id)),
      map((movie) => loadMovieSuccess({ movie }))
    )
  );

  constructor(
    private movieService: MovieService,
    private actions$: Actions,
    private router: Router
  ) {}
}
