import { Component, OnInit } from '@angular/core';
import { User } from '../../user'
import { UsersServiceService } from '../users-service.service'

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users : User[] = [];

  selectedUser: User;
    
  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.usersService.getUsers();
    this.usersService.users.subscribe(response => this.users = response);
  }

  ShowPhones(user : User) : void {
    if(this.selectedUser === user)
    {
      this.selectedUser = null;
      return;
    }
    this.selectedUser = user;
  }

}
