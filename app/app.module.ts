
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './core/user.service';

import { MoviesModule } from './movies/movies.module';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        MoviesModule,
        LoginModule
    ],
    declarations: [ 
        AppComponent,
    ],
    bootstrap: [ AppComponent ],
    providers: [ UserService ]
})
export class AppModule { }