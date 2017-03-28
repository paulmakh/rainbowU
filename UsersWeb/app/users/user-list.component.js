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
//import { UserDetailComponent } from "./user-detail.component"
var user_service_1 = require("./user.service");
var UserListComponent = (function () {
    function UserListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.selectedUser = {};
        this.rows = [];
        this.columns = [
            { name: "UserId", title: "Код" },
            { name: "UserName", title: "Логин", filtering: { filterString: "", placeholder: "Фильтр по логину" } },
            { name: "FullName", title: "ФИО", filtering: { filterString: "", placeholder: "Фильтр по имени" } },
            { name: "PhoneNumber", title: "Телефон", filtering: { filterString: "", placeholder: "Фильтр по телефону" } },
            { name: "Email", title: "E-mail", filtering: { filterString: "", placeholder: "Фильтр по e-mail" } },
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: "" },
            className: ["table-striped", "table-bordered"]
        };
        this.page = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.timer = 0;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    //isSelected(user: User) { return user.UserId === this.selectedId; }
    //onSelect(user: User) {
    //    this.router.navigate(['/user', user.UserId]);
    //}
    UserListComponent.prototype.changeSort = function (config) {
        var columns = this.config.sorting.columns || [];
        var columnName = columns[0].name;
        var sort = "asc";
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        return {
            columnName: columnName,
            sort: sort
        };
    };
    UserListComponent.prototype.changeFilter = function (config) {
        var filterParams = {
            columnNames: "",
            filters: ""
        };
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filterParams.columnNames += column.name + ",";
                filterParams.filters += column.filtering.filterString + ",";
            }
        });
        return filterParams;
    };
    UserListComponent.prototype.onChangeTable = function (config, page) {
        //if (config.filtering) {
        //    Object.assign(this.config.filtering, config.filtering);
        //}
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        //if (config.sorting) {
        //    Object.assign(this.config.sorting, config.sorting);
        //}
        // cancel previous timer
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = 0;
        }
        // call on timeout
        var self = this;
        this.timer = setTimeout(function () {
            var sortParams = self.changeSort(self.config);
            var filterParams = self.changeFilter(self.config);
            self.service.getUsers((page.page - 1) * page.itemsPerPage, self.itemsPerPage, sortParams.columnName, sortParams.sort, filterParams.columnNames, filterParams.filters)
                .subscribe(function (result) {
                self.rows = result.Items;
                self.length = result.TotalCount;
            });
        }, 500);
    };
    UserListComponent.prototype.onCellClick = function (data, detailsModal) {
        console.log(data);
        this.selectedUser = data ? data.row : {};
        detailsModal.show();
    };
    UserListComponent.prototype.userChanged = function (newUser) {
        var i = this.rows.indexOf(this.selectedUser);
        if (i < 0) {
            // add new user to grid
            if (this.rows.length >= this.maxSize - 1) {
                this.page = Math.floor(this.length / this.maxSize) + 1;
                if (this.length % this.maxSize > 0) {
                    this.page++;
                }
                this.length = (this.page - 1) * this.maxSize;
                this.rows = [];
            }
            this.rows.push(newUser);
            this.length++;
        }
        else {
            // update changed user in grid
            this.rows[i] = newUser;
        }
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/user-list.component.html'
        //directives: [UserDetailComponent]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map