import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../core/user.service';

@Component({
    selector: 'login',
    template: `
        <button (click)="logAsSuperUser()" *ngIf="!this.userService.isLogged">
            Log as superuser
        </button>
        <button (click)="logAsSimpleUser()" *ngIf="!this.userService.isLogged">
            Log as simple user
        </button>
        <button (click)="logoutUser()" *ngIf="this.userService.isLogged">
            Logout
        </button>`
})
export class LoginComponent {

    @Output() login: EventEmitter<any> = new EventEmitter<any>();
    @Output() logout: EventEmitter<any> = new EventEmitter<any>();

    constructor(private userService: UserService) {
    }

    logAsSuperUser() {
        this.userService.isLogged = true;
        this.userService.isSuperUser = true;
        this.login.emit();
    }

    logAsSimpleUser() {
        this.userService.isLogged = true;
        this.userService.isSuperUser = false;
        this.login.emit();
    }

    logoutUser() {
        this.userService.isLogged = false;
        this.logout.emit();
    }
}