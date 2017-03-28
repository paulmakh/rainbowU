import { ErrorHandler } from '@angular/core';
//import { Router } from "@angular/router";

export class MyErrorHandler extends ErrorHandler {
    constructor(/*private router: Router*/) {
        super(true);
    }

    handleError(error) {
        //debugger;

        if (error.status == 401) {
            // set user is not logged in
            //authService.isLoggedIn() = false
            //redirect to login page
            //this.router.navigate(['login']);
        }

        if (error.statusText) {
            alert(error.statusText);
        }

        if (error.message) {
            alert(error.message);
        }
        
        super.handleError(error);
    }
}

