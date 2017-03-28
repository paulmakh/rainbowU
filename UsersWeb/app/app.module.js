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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var auth_service_1 = require("./auth.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var auth_module_1 = require("./auth.module");
var app_home_component_1 = require("./app.home.component");
var login_component_1 = require("./login.component");
var config_service_1 = require("./config.service");
var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //angular builtin module
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            auth_module_1.AuthModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_home_component_1.HomeComponent,
            login_component_1.LoginComponent
        ],
        providers: [
            config_service_1.ConfigService,
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: function (config) { return function () { return config.load(); }; },
                deps: [config_service_1.ConfigService],
                multi: true
            },
            { provide: common_1.APP_BASE_HREF, useValue: "/" },
            auth_service_1.AuthService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map