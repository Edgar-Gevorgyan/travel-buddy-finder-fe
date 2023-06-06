import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onRegister(username: string, password: string): void {
    this.userService.register(username, password);
  }
}
