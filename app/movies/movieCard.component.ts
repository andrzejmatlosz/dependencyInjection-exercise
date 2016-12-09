import { Component, Input } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'movie-card',
  template: `
    <div>
      <span>Name:</span>
      <span>{{movie.name}}</span>
    </div>`
})
export class MovieCardComponent {
  @Input() movie: Movie;
}