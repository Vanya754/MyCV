import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/todo-list/services/auth.service';
import { AppConstants } from 'src/app/pages/todo-list/shared/constants/constants';

@Component({
  selector: 'app-headerTodo',
  templateUrl: './headerTodo.component.html',
  styleUrls: ['./headerTodo.component.css'],
})
export class HeaderTodoComponent {
  user = JSON.parse(
    localStorage.getItem(AppConstants.localStorageUserKey) || '{}',
  );

  constructor(
    readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  logOut() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
