import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/pages/todo-list/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLogin implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this.authService.isAuthenticated()) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
