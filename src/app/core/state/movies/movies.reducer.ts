import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Movie } from './interfaces/movie';
import { loadMovie, loadMovieSuccess, loadMovieFail } from './movies.actions';

export interface MovieStateInterface {
  movieLoaded: boolean;
  movieDetail: Movie;
}
export const initialState: MovieStateInterface = {
  movieLoaded: false,
  movieDetail: null,
};

const _movieReducer = createReducer(
  initialState,
  on(loadMovie, (state) => ({ ...initialState })),
  on(loadMovieSuccess, (state, action) => ({
    ...state,
    movieLoaded: true,
    movieDetail: action.movie,
  })),
  on(loadMovieFail, (state) => ({ ...initialState }))
);

export function movieReducer(state, action: Action) {
  return _movieReducer(state, action);
}

export const getMovie = createFeatureSelector<Movie>('movie');
