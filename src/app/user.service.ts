import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginUrl = environment.baseURL + '/login';

  userID: string = '';
  username: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return this.userID !== null && this.userID.length > 1;
  }

  login(username: string, password: string) {
    this.http
      .post<User>(this.loginUrl, { username, password })
      .subscribe((response) => {
        this.username = username;
        this.userID = response.id;
        this.router.navigate(['trips']);
      });
  }
}
