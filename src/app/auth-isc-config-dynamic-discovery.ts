import { AuthConfig } from 'angular-oauth2-oidc';
import { AppSettings } from './app-settings';

export const IscConfigDynamic: AuthConfig = {

 // Url of the Identity Provider
 issuer: 'https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2',

 // URL of the Cache Authorization endpoint
 loginUrl: 'https://' + AppSettings.AUTH_SERVER_HOST + '/cache/oauth2/authorize',

 // URL of the SPA to redirect the user to after login
 redirectUri: window.location.origin + '/',

 // The SPA's id. The SPA is registerd with this id at the auth-server
 clientId: 'AitY_L-1DzTIohoBJQWo6CvXyRfe4NvtjXM3MeplNiE',

 // set the scope for the permissions the client should request
 // The first three are defined by OIDC. The 4th is a usecase-specific one
 scope: 'openid profile email special-deals'

};
