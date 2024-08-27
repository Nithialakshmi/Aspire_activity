import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.checkAuthentication()) {
      return true;
    } else {
        alert('Please enter the Signup and Login Credentials');
      this.router.navigate(['/login']);
      return false;
    }
  }
}



