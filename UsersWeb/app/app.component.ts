import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    constructor(public router: Router, public authService: AuthService) { }

    isActive(data: any[]): boolean {
        return this.router.isActive(
            this.router.createUrlTree(data),
            true
        );
    }

    logout(): boolean {
        // logs out the user, then redirects him to Welcome View.
        if (this.authService.logout()) {
            this.router.navigate([""]);
        }
        return false;
    }
}