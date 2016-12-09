import { Component } from '@angular/core';
import { UserService } from './core/user.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {

    constructor(private userService: UserService) { 
    }
}