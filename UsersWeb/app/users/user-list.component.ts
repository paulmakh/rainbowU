import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

//import { UserDetailComponent } from "./user-detail.component"
import { User, UserService } from "./user.service";

@Component({
    templateUrl: 'app/users/user-list.component.html'
    //directives: [UserDetailComponent]
})
export class UserListComponent implements OnInit {
    selectedUser: User = <User>{};

    rows: Array<User> = [];
    columns: Array<any> = [
        { name: "UserId", title: "Код" },
        { name: "UserName", title: "Логин", filtering: { filterString: "", placeholder: "Фильтр по логину" } },
        { name: "FullName", title: "ФИО", filtering: { filterString: "", placeholder: "Фильтр по имени" } },
        { name: "PhoneNumber", title: "Телефон", filtering: { filterString: "", placeholder: "Фильтр по телефону" } },
        { name: "Email", title: "E-mail", filtering: { filterString: "", placeholder: "Фильтр по e-mail" } },
        //{ name: "Delete" }
    ];

    config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: "" },
        className: ["table-striped", "table-bordered"]
    };

    page = 1;
    itemsPerPage = 5;
    maxSize = 5;
    numPages = 1;
    length = 0;

    timer = 0;

    constructor(
        private service: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.onChangeTable(this.config);
    }

    //isSelected(user: User) { return user.UserId === this.selectedId; }

    //onSelect(user: User) {
    //    this.router.navigate(['/user', user.UserId]);
    //}

    public changeSort(config: any): any {
        let columns = this.config.sorting.columns || [];
        let columnName: string = columns[0].name;
        let sort: string = "asc";

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        return {
            columnName: columnName,
            sort: sort
        }
    }

    public changeFilter(config: any): any {
        let filterParams = {
            columnNames: "",
            filters: ""
        };
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filterParams.columnNames += column.name + ",";
                filterParams.filters += column.filtering.filterString + ",";
            }
        });
        return filterParams;
    }


    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        //if (config.filtering) {
        //    Object.assign(this.config.filtering, config.filtering);
        //}

        //if (config.sorting) {
        //    Object.assign(this.config.sorting, config.sorting);
        //}

        // cancel previous timer
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = 0;
        }            

        // call on timeout
        let self = this;
        this.timer = setTimeout(function () {
            let sortParams = self.changeSort(self.config);
            let filterParams = self.changeFilter(self.config);

            self.service.getUsers((page.page - 1) * page.itemsPerPage, self.itemsPerPage, sortParams.columnName, sortParams.sort, filterParams.columnNames, filterParams.filters)
                .subscribe(result => {
                    self.rows = result.Items;
                    self.length = result.TotalCount;
                });
        }, 500);
    }

    public onCellClick(data: any, detailsModal: any): any {
        console.log(data);
        this.selectedUser = data ? data.row : <User>{};
        detailsModal.show();
    }

    public userChanged(newUser) {
        let i = this.rows.indexOf(this.selectedUser);
        if (i < 0) {
            // add new user to grid
            if (this.rows.length >= this.maxSize - 1)
            {
                this.page = Math.floor(this.length / this.maxSize) + 1;
                if (this.length % this.maxSize > 0) {
                    this.page++;
                }
                this.length = (this.page - 1) * this.maxSize;
                this.rows = [];
            }
            this.rows.push(newUser)
            this.length++;
        } else {
            // update changed user in grid
            this.rows[i] = newUser;
        }

    }
}
