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
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("app/settings.json")
                .map(function (res) { return res.json(); })
                .subscribe(function (settings_data) {
                _this._settings = settings_data;
                _this.usersApiUrl = _this.getSetting("usersApiUrl");
                resolve();
            });
        });
    };
    ConfigService.prototype.getSetting = function (key) {
        return this._settings[key];
    };
    return ConfigService;
}());
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConfigService);
exports.ConfigService = ConfigService;
;
//# sourceMappingURL=config.service.js.map