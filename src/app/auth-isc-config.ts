import { AuthConfig } from 'angular-oauth2-oidc';
import { AppSettings } from './app-settings';

export const IscConfigManual: AuthConfig = {

 // Url of the Identity Provider
 issuer: 'https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2',

 // URL of the Cache Authorization endpoint
 loginUrl: 'https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/authorize',

 userinfoEndpoint: 'https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/userinfo',

 // URL of the SPA to redirect the user to after login
 redirectUri: window.location.origin + '/',

 // The SPA's id. The SPA is registerd with this id at the auth-server
 clientId: 'AitY_L-1DzTIohoBJQWo6CvXyRfe4NvtjXM3MeplNiE',

 // set the scope for the permissions the client should request
 // The first three are defined by OIDC. The 4th is a usecase-specific one
 scope: 'openid profile email special-deals',


 /*
  in order to figure out what JWKS Cache exposes please use this link
  (from Cache oauth2 server metadata): https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/jwks

  for some reason, even though we can successfully perform discovery and retrieve jwks,
  we do not store access token which Cache issues,
  it only works when we do manual login, it looks like timing issue, as if the jwks list was
  coming too late from the server to be used to validate jwt

  sometimes it is necessary to accept ssl certificate by alling
  https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/.well-known/openid-configuration url manually
  */

 // retrieve by calling https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/jwks, only two of 5 keys are present here
 // your keys wil be different, make sure you modify them accordingly!
 jwks: { 'keys': [
    {
        'kty': 'RSA',
        'alg': 'RS256',
        'e': 'AQAB',
        'kid': 6,
        // tslint:disable-next-line:max-line-length
        'n': 'lWk1T1ECXjy0UAMwOROJvMJvF0np6igagx1l0F_jEv3PdAZu94tt35uiz9job9xzjZGw2H6eGd4xSG8KiLhAmf8CHMud2Ewv4KsQbIfn0LbHaOkjKKow87kt5n9wY-FA59KezLeGo1AMILb8yvaSvTOtM7US8Vy0MDuBlMFYynbEUitzGPpINL_I_5jTWw8uUn3QgajsNdurlUqDP6RbLlyqsW80C8nO7dopTU14PwkhOcGxkA6Js26eNM1eOvB1WDNiBZJQZw7-DMVne0KQ1PwW67Vd1nT_A6tickiOYq71pJPubOHHT6tUz_Fm-83bR-ZotIJ2xgdF4KPEeSn1bw',
        'use': 'sig'
    },
    {
        'kty': 'RSA',
        // tslint:disable-next-line:max-line-length
        'n': 'rz32BdnVhehEk5HycwM0sCsEsXXOUqJLWST9VXO4JWPJD7KmcI8te4-Jpd8K9g46cA5CwVzuXE9Oulla6vjZGaHdt0YkwjwTG25UmK7XTPs6ob4204n3ciULT1b4sttZcM55kdKxSYe8rtKKil60bggncw7cFRUH8WW6dfwFZHvo2FmgRB6TyIabQr0Q1teLSKN2Gn-7bHJ9k6z0-rO0dYjFyq0ta1hDCmJ7AXqljT1Wy2dVQg1SeT9fc_1lND-uohh4534X2rHIS84TKEt0mw9pBPH0gQiJcU2cRIrIaGFlK-lRp_jov-vQtAQc2NHict_MNbJwvcw7dCp-pBZnfQ',
        'e': 'AQAB',
        'alg': 'RS384',
        'use': 'sig',
        'kid': 7
    }
 ]},


};
