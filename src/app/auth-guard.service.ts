import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// Import our authentication service
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: OAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if (!this.auth.hasValidAccessToken()) {
      console.log(this.auth.hasValidAccessToken());
      window.alert('you must login!');
      // this.router.navigate(['']);
      console.log('canActivate: not authenticated');
      return false;
    }
    console.log('canActivate: authenticated');
    return true;
  }

}
