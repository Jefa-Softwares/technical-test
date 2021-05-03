import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Movie } from 'src/app/core/state/movies/interfaces/movie';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss'],
})
export class FormMovieComponent implements OnInit {
  movieForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    cover_url: [''],
    vote_average: [''],
  });
  @Input() movie: Movie;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let tempMovie = {
      ...this.movie,
      title: this.movieForm.value.title,
      tagline: this.movieForm.value.description,
      poster_path: this.movieForm.value.cover_url,
      vote_average: this.movieForm.value.vote_average,
    };
    this.downloadJson(tempMovie);
    this.movieForm.reset();
  }

  downloadJson(myJson) {
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson)
    );
    element.setAttribute('download', 'movie.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
