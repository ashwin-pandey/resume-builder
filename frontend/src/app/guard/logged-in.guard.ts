import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  isLoggedIn: boolean = false;
  constructor(private _auth: AuthService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._auth.isLoggedIn.subscribe((result) => {
      this.isLoggedIn = result;
      if (this.isLoggedIn) {
        this._router.navigate(['/template'])
      }
    });
    return true;
  }

}
