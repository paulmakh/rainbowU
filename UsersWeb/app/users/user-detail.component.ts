import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, Output, HostBinding, SimpleChange, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User, UserService } from './user.service';

@Component({
    selector: "user-details",
    templateUrl: "app/users/user-detail.component.html"
})
export class UserDetailComponent implements OnInit {
    @Input() selectedUser: User;
    @Output() userChanged: EventEmitter<User> = new EventEmitter<User>();
    editUser: User = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService
    ) { }

    ngOnInit() {
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
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
                .subscribe(result => {
                    this.editUser = result;
                });
        }
    }

    Save() {

        if (this.editUser.UserId) {
            this.service.updateUser(this.editUser)
                .subscribe(result => {
                    this.userChanged.emit(result)
                });
        } else {
            this.service.createUser(this.editUser)
                .subscribe(result => {
                    this.userChanged.emit(result)
                });
        }        
    }

    //gotoUsers() {
    //    let userId = this.user ? this.user.UserId : null;
    //    // Pass along the user id if available
    //    // so that the UserList component can select that user.
    //    // Include a junk 'foo' property for fun.
    //    this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
    //}
}
