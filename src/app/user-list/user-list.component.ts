import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/class/User.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];
  usersSubscription!: Subscription; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsersSubject();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
