import { NgModule, ErrorHandler } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
//import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthHttp } from "./auth.http";
import { MyErrorHandler } from "./app.errorHandler"

//function authHttpServiceFactory(http: Http, options: RequestOptions) {
//    return new AuthHttp(new AuthConfig(), http, options);
//}

@NgModule({
    providers: [
        AuthHttp,
        { provide: ErrorHandler, useClass: MyErrorHandler }
    //    {
    //        provide: AuthHttp,
    //        useFactory: authHttpServiceFactory,
    //        deps: [Http, RequestOptions]
    //    }
    ]
})
export class AuthModule { }