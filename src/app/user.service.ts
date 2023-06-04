import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userID: string = '';

  constructor() {}

  isLoggedIn(): boolean {
    return this.userID !== null && this.userID.length > 1;
  }
}
