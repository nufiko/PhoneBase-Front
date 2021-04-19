import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private _users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  public readonly users: Observable<User[]> = this._users.asObservable();

  constructor(private http: HttpClient) { 
    this.getUsers();
  }

  getUsers(): void {
    this.http.get<any>('http://localhost:5000/api/users?$expand=Phones')
      .subscribe(response => this._users.next(response.value));
  }

  postPhone(userId: number, phoneNumber: string) : void {
    this.http.post<any>('http://localhost:5000/api/phones('+userId+')', {PhoneNumber: phoneNumber})
      .subscribe(() => this.getUsers());
  }

  postUser(newUser: User) : void {
    this.http.post<any>('http://localhost:5000/api/users', newUser)
      .subscribe(() => this.getUsers());
  }
}
