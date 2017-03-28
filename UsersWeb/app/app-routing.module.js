"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_home_component_1 = require("./app.home.component");
var login_component_1 = require("./login.component");
var appRoutes = [
    /*{
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },*/
    {
        path: "",
        component: app_home_component_1.HomeComponent
    },
    {
        path: "login",
        component: login_component_1.LoginComponent
    },
    {
        path: "home",
        component: app_home_component_1.HomeComponent
    },
    {
        path: "users",
        loadChildren: "app/users/users.module#UsersModule"
        /*canLoad: [AuthGuard]*/
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes /*,
        { preloadingStrategy: SelectivePreloadingStrategy }*/)
        ],
        exports: [
            router_1.RouterModule
        ] /*,
        providers: [
          CanDeactivateGuard,
          SelectivePreloadingStrategy
        ]*/
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map