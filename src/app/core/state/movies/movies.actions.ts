import { createAction, props } from '@ngrx/store';
import { Movie } from './interfaces/movie';

export const loadMovie = createAction(
  '[Movies component] Load Movies',
  props<{ id: number }>()
);
export const loadMovieSuccess = createAction(
  '[Movies component] Load Movies Success',
  props<{ movie: Movie }>()
);
export const loadMovieFail = createAction(
  '[Movies component] Load Movies Fail'
);
