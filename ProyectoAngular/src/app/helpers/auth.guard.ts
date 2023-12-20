import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard canActivate function is running');
    if (this.loginService.getToken()) {
      console.log('Token exists. Allowing access.');
      //this.router.navigate(['login']);
      return true;
    }
    console.log('No token. Redirecting to login.');
    this.router.navigate(['login']);
    return false;
  }
  
}
