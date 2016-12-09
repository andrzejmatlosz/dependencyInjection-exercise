import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movieList.component';
import { MovieCardComponent } from './movieCard.component';
import { MovieEditorComponent } from './movieEditor.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ MovieListComponent, MovieCardComponent, MovieEditorComponent ],
    exports: [ MovieListComponent ]
})
export class MoviesModule {}