import {Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {forwardRef, Injectable, NgModule} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {usersService} from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    userLoggedIn:boolean = false;
    user: User;
    username:string;
    notify:string;
    subscription: Subscription;
    constructor(private userService: usersService) { }

  ngOnInit() {
}
  onLogin(user:string){
    this.userService.getuserbyname(user)
      .then(usr => {
        this.user = usr;
        console.log(usr[0].userName);
        if(usr.length == 1){
          this.username= usr[0].userName;
          this.userLoggedIn = true;
        }
        else{
          this.notify = "deze naam is nog niet in gebruik";
        }
      })
      .catch(error => console.log(error));
      this.notify = "deze naam is nog niet in gebruik";
   }
  }
