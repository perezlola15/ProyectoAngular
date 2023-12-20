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
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  
}
