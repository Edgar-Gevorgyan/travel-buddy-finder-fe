import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginUrl = environment.baseURL + '/login';

  userID: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return this.userID !== null && this.userID.length > 1;
  }

  login(username: string, password: string) {
    this.http
      .post<{ id: string }>(this.loginUrl, { username, password })
      .subscribe((response) => {
        this.userID = response.id;
        this.router.navigate(['']);
      });
  }
}