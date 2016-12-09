import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { EditItem } from './../core/editItem';

@Component({
    selector: 'movie-list',
    template: `
        <div *ngFor="let editableMovie of movieList">
            <movie-card [movie]="editableMovie.item" [hidden]="editableMovie.editing"></movie-card>
            <button [hidden]="editableMovie.editing"
                (click)="editableMovie.editing = true">
                edit
            </button>
            <movie-editor 
                [movie]="editableMovie.item" 
                [hidden]="!editableMovie.editing"
                (saved)="onSaved(editableMovie, $event)"
                (canceled)="onCanceled(editableMovie)">
            </movie-editor>
        </div>
        `,
    providers: [ MovieService ]
})
export class MovieListComponent implements OnInit {

    movieList: Array<EditItem<Movie>>;

    constructor (private movieService: MovieService) {}

    ngOnInit () {
        this.movieList = this.movieService.getMovies()
            .map(movie => new EditItem(movie));
    }

    onSaved (editItem: EditItem<Movie>, updatedMovie: Movie) {
        editItem.item = updatedMovie;
        editItem.editing = false;
    }

    onCanceled (editItem: EditItem<Movie>) {
        editItem.editing = false;
    }
}