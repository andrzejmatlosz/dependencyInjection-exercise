import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from './movie.model';

@Component({
  selector: 'movie-editor',
  template: `
    <div>
      <span>Name:</span>
      <input [(ngModel)]="movieObject.name" />
      <div>
        <button (click)="onSaved()">Save</button>
        <button (click)="onCanceled()">Cancel</button>
      </div>
    </div>` 
})
export class MovieEditorComponent {
  movieObject: Movie;
  
  @Output() canceled = new EventEmitter<Movie>();
  @Output() saved = new EventEmitter<Movie>();

  constructor() {
      
  }

  @Input() set movie (movie: Movie) {
    this.movieObject = movie;
  }

  get movie () {
    return this.movieObject;
  }

  onSaved () {
    this.saved.emit(this.movie);
  }

  onCanceled () {
    this.canceled.emit(this.movie);
  }
}