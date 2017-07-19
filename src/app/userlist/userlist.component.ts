import { Component, OnInit } from '@angular/core';

import { User }                from '../user';
import { UsersService }         from '../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private usersService: UsersService) { }

  getUsers(): void {
    this.usersService
        .getUsers()
        .then(users => this.users = users);
  }

  ngOnInit() {
  }

}
