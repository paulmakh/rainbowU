﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
//import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { AuthHttp } from "../auth.http";
import { ConfigService } from "../config.service";


export class User {
    constructor(
        public Email: string,
        public FullName: string,
        public IsLocked: boolean,
        public Language: string,
        public UserName: string,
        public Password: string,
        public PhoneNumber: string,
        public RegionId: number,
        public Timezone: number,
        public UserId: number,
        //public Delete: string //  public Delete: string = "<i class='fa fa- trash' aria-hidden='true'></i>"
    ) { }
}

export class ListResult<T> {
    Items: Array<T>;
    TotalCount: number;
    Page: number;
    Take: number;
    Skip: number;
}

@Injectable()
export class UserService {
    constructor(private authHttp: AuthHttp, private config: ConfigService) { }

    //private baseUrl = "http://epuakyiw2509/RainbowAPI/api/Users"; 

    getUsers(skip: number, take: number, sortColumn: string, sortDirection: string, filterColumns: string, filterValues: string): Observable<ListResult<User>> {
        let params = new URLSearchParams();
        params.set("skip", String(skip));
        params.set("take", String(take));
        params.set("sortColumn", sortColumn);
        params.set("sortDirection", sortDirection);
        params.set("filterColumns", filterColumns);
        params.set("filterValues", filterValues);

        return this.authHttp.get(this.config.usersApiUrl + "Users", { search: params })
            .map(response => response.json());
            //.catch(this.handleError);
    }

    getUser(id: number | string): Observable<User> {
        return this.authHttp.get(this.config.usersApiUrl + "Users/" + id)
            .map(response => response.json());
        //.catch(this.handleError);
    }

    createUser(user: User): Observable<User> {
        return this.authHttp.post(this.config.usersApiUrl + "Users", user)
            .map(response => response.json());
    }

    updateUser(user: User): Observable<User> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.authHttp.put(this.config.usersApiUrl + "Users/" + user.UserId, JSON.stringify(user), { headers: headers })
            .map(response => response.json());
    }

    deleteUser(id: number) {
        this.authHttp.delete(this.config.usersApiUrl + "Users/" + id);
    }

    private handleError(error: Response) {
        // output errors to the console.
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }

}