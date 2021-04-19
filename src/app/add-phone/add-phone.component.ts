import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/User';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})

export class AddPhoneComponent implements OnInit {
  @Input() user?: User;

  newNumber: string;
  errorMessage: string ='';

  constructor(private userService: UsersServiceService) {}

  ngOnInit(): void {
  }

  saveNumber(): void {
    if(!this.newNumber)
    {
      this.errorMessage = 'Number required';
      return;
    }

    this.userService.postPhone(this.user.Id, this.newNumber);
    console.log('Number saved');
    this.newNumber = null;
  }

}
