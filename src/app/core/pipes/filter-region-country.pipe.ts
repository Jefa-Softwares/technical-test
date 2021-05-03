import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegionCountry',
})
export class FilterRegionCountryPipe implements PipeTransform {
  transform(movies: any, term: string): any {
    //check if the search term is defined
    if (!movies || !term) return movies;

    //return updated movies array
    return movies.filter(function (country) {
      return country.region.toLowerCase().includes(term.toLowerCase());
    });
  }
}
