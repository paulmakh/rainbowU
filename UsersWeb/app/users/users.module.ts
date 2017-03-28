import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Ng2TableModule } from "ng2-table";
import { PaginationModule, ModalModule } from "ng2-bootstrap";
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { UserListComponent } from "./user-list.component";
import { UserDetailComponent } from "./user-detail.component";

import { UserService } from "./user.service";

import { UserRoutingModule } from "./user-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        Ng2TableModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        UserListComponent,
        UserDetailComponent
    ],
    providers: [UserService, AUTH_PROVIDERS]
})
export class UsersModule { }