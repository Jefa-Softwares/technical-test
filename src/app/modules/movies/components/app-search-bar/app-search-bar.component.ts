import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/core/state/movies/interfaces/movie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './app-search-bar.component.html',
  styleUrls: ['./app-search-bar.component.scss'],
})
export class AppSearchBarComponent implements OnInit {
  menuOpen = true;
  items = [
    297761,
    324668,
    291805,
    241251,
    278927,
    278924,
    209112,
    76341,
    271110,
    135397,
    131631,
    168259,
    87101,
    211672,
    157336,
    278154,
    293660,
    290250,
    325133,
    244786,
  ];
  constructor(
    private store: Store<{ movies: Movie }>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  randomMovie() {
    let randIdMovie = this.rndNumberFromInterval(100, 500);
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/' + randIdMovie]));
  }

  rndNumberFromInterval(min, max) {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}
