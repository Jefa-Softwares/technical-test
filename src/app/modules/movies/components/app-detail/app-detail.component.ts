import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovie } from 'src/app/core/state/movies/movies.actions';
import { Movie } from 'src/app/core/state/movies/interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { getMovie } from 'src/app/core/state/movies/movies.reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss'],
})
export class AppDetailComponent implements OnInit {
  movie$: Observable<Movie>;
  searchTerm: string;
  idMovie = 640;
  baseUrl = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private store: Store<{ movie: Movie }>
  ) {}

  ngOnInit(): void {
    let idMovieRnd = parseInt(this._activatedRoute.snapshot.params.id);
    if (idMovieRnd) {
      this.store.dispatch(loadMovie({ id: idMovieRnd }));
    } else {
      this.store.dispatch(loadMovie({ id: this.idMovie }));
    }
    this.movie$ = this.store.select(getMovie);
    this.movie$.subscribe((item) => {
      console.log(item);
    });
  }
}
