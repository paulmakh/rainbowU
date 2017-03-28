import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Config {
    private _settings: Object;
    public usersApiUrl: string; 

    constructor(private http: Http) {
    }

    private load() {
        return new Promise((resolve, reject) => {
            this.http.get("app/settings.json")
                .map(res => res.json())
                .subscribe((settings_data) => {
                    this._settings = settings_data;

                    this.usersApiUrl = this.getSetting("usersApiUrl");
                });
        });
    }

    public getSetting(key: any) {
        return this._settings[key];
    }
};