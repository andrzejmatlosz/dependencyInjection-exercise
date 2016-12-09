import { Injectable, Optional } from '@angular/core';
import { Movie } from './movie.model';

let movieList: Array<Movie> = [
    { name: 'Pulp fiction', isSecret: true },
    { name: 'Pitbull', isSecret: true }, 
    { name: 'Braveheart', isSecret: false },
    { name: 'Sully', isSecret: false },
];

export class MovieService {
    constructor(@Optional() private withSecrets: boolean) {}

    getMovies () : Array<Movie> {
        if (this.withSecrets) {
            return movieList;
        } else {
            return movieList.filter(movie => !movie.isSecret);
        }
    }
}