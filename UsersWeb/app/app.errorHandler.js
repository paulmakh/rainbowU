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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Router } from "@angular/router";
var MyErrorHandler = (function (_super) {
    __extends(MyErrorHandler, _super);
    function MyErrorHandler() {
        return _super.call(this, true) || this;
    }
    MyErrorHandler.prototype.handleError = function (error) {
        //debugger;
        if (error.status == 401) {
            // set user is not logged in
            //authService.isLoggedIn() = false
            //redirect to login page
            //this.router.navigate(['login']);
        }
        if (error.statusText) {
            alert(error.statusText);
        }
        if (error.message) {
            alert(error.message);
        }
        _super.prototype.handleError.call(this, error);
    };
    return MyErrorHandler;
}(core_1.ErrorHandler));
exports.MyErrorHandler = MyErrorHandler;
//# sourceMappingURL=app.errorHandler.js.map