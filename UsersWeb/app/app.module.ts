import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";

import { APP_BASE_HREF } from "@angular/common";
import { AuthService } from "./auth.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth.module";

import { HomeComponent } from "./app.home.component";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        //angular builtin module
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AuthModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
    }
}

