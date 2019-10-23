import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageRating'
})
export class AverageRatingPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    let average = 0;
    if (value && value.length > 0) {
      const values = value.reduce((data, movie) => {
        const total = data.total + (movie.rating ? movie.rating : 0);
        const count = data.count + (movie.rating ? 1 : 0);
        return { total, count };
      }, {total: 0, count: 0});
      average = values.total / values.count;
      average = isNaN(average) ? 0 : average;
    }
    return average;
  }

}
