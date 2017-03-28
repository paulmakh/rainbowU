"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_table_1 = require("ng2-table");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_jwt_1 = require("angular2-jwt");
var user_list_component_1 = require("./user-list.component");
var user_detail_component_1 = require("./user-detail.component");
var user_service_1 = require("./user.service");
var user_routing_module_1 = require("./user-routing.module");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            user_routing_module_1.UserRoutingModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot()
        ],
        declarations: [
            user_list_component_1.UserListComponent,
            user_detail_component_1.UserDetailComponent
        ],
        providers: [user_service_1.UserService, angular2_jwt_1.AUTH_PROVIDERS]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map