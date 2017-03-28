import { NgModule, APP_INITIALIZER } from "@angular/core";
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
import { ConfigService } from "./config.service";

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
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (config: ConfigService) => () => config.load(),
            deps: [ConfigService],
            multi: true
        },
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

