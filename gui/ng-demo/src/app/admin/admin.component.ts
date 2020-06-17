import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  test = "testValue"
  enteredUser: User = new User();
  userMap: Map<string, User> = new Map()
  users: User[] = new Array();
  constructor() {

  }

  ngOnInit() {
  }

  add(): void {
    this.users.push(this.enteredUser)
    this.userMap.set(this.enteredUser.name, this.enteredUser)
    this.enteredUser = new User()
  }

  remove(user: User): void {
    this.userMap.delete(user.name);
    this.enteredUser = new User()
  }

  select(user: User): void {
    this.enteredUser = user;
  }
}
