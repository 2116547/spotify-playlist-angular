  import { User } from '../model/user.model';
  import { Injectable } from '@angular/core';
  import {environment} from '../../../environments/environment';
  import {Subject} from 'rxjs/Subject';
  import {Http, Headers} from '@angular/http';

  @Injectable()
export class usersService
{
  usersChanged = new Subject<User[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'user'; // URL to web api
  private users: User[];

  constructor(private http: Http) {
  }

  
  getuserbyname(name : string): Promise<User> {
      return this.http.get(this.serverUrl + '/user/' + name, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
      return response.json() as User;
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(error.message || error);
    });
  }
}
