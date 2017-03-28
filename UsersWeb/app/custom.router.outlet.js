"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var router_1 = require("@angular/router");
var app_config_1 = require("./app.config");
var CustomRouterOutlet = (function (_super) {
    __extends(CustomRouterOutlet, _super);
    //private parentRouter: Router;
    function CustomRouterOutlet(parentOutletMap, location, resolver, name, _config) {
        var _this = _super.call(this, parentOutletMap, location, resolver, name) || this;
        _this._config = _config;
        return _this;
        //this.parentRouter = _parentRouter;
    }
    CustomRouterOutlet.prototype.activate = function (activatedRoute, resolver, injector, providers, outletMap) {
        var _this = this;
        return this._config.load().then(function () { return _super.prototype.activate.call(_this, activatedRoute, resolver, injector, providers, outletMap); });
    };
    return CustomRouterOutlet;
}(router_1.RouterOutlet));
CustomRouterOutlet = __decorate([
    core_1.Directive({
        selector: "custom-router-outlet"
    }),
    __metadata("design:paramtypes", [router_1.RouterOutletMap, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, String, app_config_1.Config])
], CustomRouterOutlet);
exports.CustomRouterOutlet = CustomRouterOutlet;
//# sourceMappingURL=custom.router.outlet.js.map