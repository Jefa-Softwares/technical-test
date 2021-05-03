import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/state/movies/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input() data: Movie;
  genresTrasnform = [];
  constructor() {}

  ngOnInit(): void {
    this.data.genres.map((item) => {
      this.genresTrasnform.push(item.name);
    });
  }
}
