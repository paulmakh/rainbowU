"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var auth_http_1 = require("../auth.http");
var config_service_1 = require("../config.service");
var User = (function () {
    function User(Email, FullName, IsLocked, Language, UserName, Password, PhoneNumber, RegionId, Timezone, UserId) {
        this.Email = Email;
        this.FullName = FullName;
        this.IsLocked = IsLocked;
        this.Language = Language;
        this.UserName = UserName;
        this.Password = Password;
        this.PhoneNumber = PhoneNumber;
        this.RegionId = RegionId;
        this.Timezone = Timezone;
        this.UserId = UserId;
    }
    return User;
}());
exports.User = User;
var ListResult = (function () {
    function ListResult() {
    }
    return ListResult;
}());
exports.ListResult = ListResult;
var UserService = (function () {
    function UserService(authHttp, config) {
        this.authHttp = authHttp;
        this.config = config;
    }
    //private baseUrl = "http://epuakyiw2509/RainbowAPI/api/Users"; 
    UserService.prototype.getUsers = function (skip, take, sortColumn, sortDirection, filterColumns, filterValues) {
        var params = new http_1.URLSearchParams();
        params.set("skip", String(skip));
        params.set("take", String(take));
        params.set("sortColumn", sortColumn);
        params.set("sortDirection", sortDirection);
        params.set("filterColumns", filterColumns);
        params.set("filterValues", filterValues);
        return this.authHttp.get(this.config.usersApiUrl + "Users", { search: params })
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp.get(this.config.usersApiUrl + "Users/" + id)
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        return this.authHttp.post(this.config.usersApiUrl + "Users", user)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.authHttp.put(this.config.usersApiUrl + "Users/" + user.UserId, JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        this.authHttp.delete(this.config.usersApiUrl + "Users/" + id);
    };
    UserService.prototype.handleError = function (error) {
        // output errors to the console.
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_1.AuthHttp, config_service_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map