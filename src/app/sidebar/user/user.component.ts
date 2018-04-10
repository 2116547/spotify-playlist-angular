import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userLoggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    this.userLoggedIn = true;
  }

  onLogout() {
    this.userLoggedIn = false;
  }

  onCreatAccount() {

  }

  onEditAccount() {

  }

}
