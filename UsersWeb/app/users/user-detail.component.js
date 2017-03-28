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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.userChanged = new core_1.EventEmitter();
        this.editUser = null;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['selectedUser']) {
            if (this.selectedUser == null) {
                this.editUser = null;
                return;
            }
            this.editUser = JSON.parse(JSON.stringify(this.selectedUser));
            if (!this.editUser.UserId) {
                return;
            }
            this.service.getUser(this.editUser.UserId)
                .subscribe(function (result) {
                _this.editUser = result;
            });
        }
    };
    UserDetailComponent.prototype.Save = function () {
        var _this = this;
        if (this.editUser.UserId) {
            this.service.updateUser(this.editUser)
                .subscribe(function (result) {
                _this.userChanged.emit(result);
            });
        }
        else {
            this.service.createUser(this.editUser)
                .subscribe(function (result) {
                _this.userChanged.emit(result);
            });
        }
    };
    return UserDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_service_1.User)
], UserDetailComponent.prototype, "selectedUser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserDetailComponent.prototype, "userChanged", void 0);
UserDetailComponent = __decorate([
    core_1.Component({
        selector: "user-details",
        templateUrl: "app/users/user-detail.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map