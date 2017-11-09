import { Injectable } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
// import { IscConfigManual } from './auth-isc-config';
// import { IscConfigDynamic } from './auth-isc-config-dynamic-discovery';


@Injectable()
export class AuthService {

// We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
constructor(public oauthService: OAuthService) {
}

login() {
  this.oauthService.initImplicitFlow();
}

logout() {
  this.oauthService.logOut();
}


public get isUserAuthenticated() {
  if (this.oauthService.hasValidAccessToken()) {
    return true;
  }
  return false;
}

public get givenName() {
  /*
  const promise = this.oauthService.loadUserProfile()
  .catch( (error) => { console.log(error); } );
  */

  // Cache is not publishing profile data, so we can only use 'sub' claim
  const claims = this.oauthService.getIdentityClaims();
  if (!claims) {
    return null;
  }
  return claims['sub'];
}

}
