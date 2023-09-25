import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/todo-list/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;

  constructor(private readonly auth: AuthService) {}

  async login() {
    await this.auth.login(this.email);
  }
}
