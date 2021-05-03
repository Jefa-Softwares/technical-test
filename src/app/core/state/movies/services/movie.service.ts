import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../interfaces/movie';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${Constants.baseUrl}/${id}?api_key=${Constants.apiKey}&language=es-ES`
    );
  }
}
