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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LoginComponent = (function () {
    function LoginComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.title = "Вход";
        this.loginForm = null;
        this.loginError = false;
        if (this.authService.isLoggedIn()) {
            this.router.navigate([""]);
        }
        this.loginForm = fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.performLogin = function (e) {
        var _this = this;
        e.preventDefault();
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.authService.login(username, password)
            .subscribe(function (data) {
            // login successful
            _this.loginError = false;
            var auth = _this.authService.getAuth();
            _this.router.navigate([""]);
        }, function (err) {
            // login failure
            console.log(err);
            _this.loginError = true;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"login-container\">\n      <h2 class=\"form-login-heading\">Login</h2>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginError\"><strong>Warning:</strong> Username or Password mismatch</div>\n      <form class=\"form-login\" [formGroup]=\"loginForm\" (submit)=\"performLogin($event)\">\n        <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Your username or e-mail address\" required autofocus />\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Your password\" required />\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\">\n            Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map