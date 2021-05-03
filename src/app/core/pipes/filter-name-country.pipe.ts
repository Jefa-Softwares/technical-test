import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameCountry',
})
export class FilterNameCountryPipe implements PipeTransform {
  transform(movies: any, term: string): any {
    //check if the search term is defined
    if (!movies || !term) return movies;

    //return updated movies array
    return movies.filter(function (country) {
      return country.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
