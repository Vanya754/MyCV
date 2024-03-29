import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { lastValueFrom, Subject } from 'rxjs';
import { ApiService } from 'src/app/pages/todo-list/services/api.service';
import { AppConstants } from 'src/app/pages/todo-list/shared/constants/constants';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private readonly http: HttpClient,
    private readonly apiService: ApiService,
    private router: Router,
  ) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AppConstants.localStorageUserKey);
  }

  async login(email: string): Promise<boolean> {
    const user = (await lastValueFrom(this.apiService.getUserData(email)))[0];

    if (user) {
      localStorage.setItem(
        AppConstants.localStorageUserKey,
        JSON.stringify(user),
      );
      this.router.navigateByUrl('/todos');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.clear();
  }
}
