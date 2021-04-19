import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/phone';
import { User } from 'src/user';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  showForm: boolean = false;

  user: User = {
    Name : null,
    LastName : null,
    Phones : [
    ]
  };

  phone: Phone = {
    PhoneNumber : null
  }

  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
  }

  addClick(): void {
    this.showForm = !this.showForm;
  }

  submit(): void {
    this.user.Phones.push(this.phone);
    this.usersService.postUser(this.user);
    this.clearForm();
  }

  private clearForm(): void {
    this.user = { 
      Name : null,
      LastName : null,
      Phones : null
    }
    this.phone = {
      PhoneNumber: null
    }
  }

}
