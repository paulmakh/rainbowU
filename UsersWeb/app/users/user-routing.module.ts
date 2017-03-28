import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from "./user-list.component";
import { UserDetailComponent } from "./user-detail.component";

const usersRoutes: Routes = [
    { path: "", component: UserListComponent },
    { path: "users", component: UserListComponent },
    { path: "user/:id", component: UserDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }