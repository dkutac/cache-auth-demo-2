import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { IscConfigDynamic } from './auth-isc-config-dynamic-discovery';
import { IscConfigManual } from './auth-isc-config';
import { AppSettings } from './app-settings';

@Component({
  selector: 'app-daily-deals',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daily Deals';

 private useDynamicDiscovery: Boolean = AppSettings.DYNAMIC_DISCOVERY;

constructor(private oauthService: OAuthService, private authService: AuthService) {
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    if (this.useDynamicDiscovery) {
      this.oauthService.configure(IscConfigDynamic);
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    } else {
      this.oauthService.configure(IscConfigManual);
      this.oauthService.tryLogin();
    }

    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.events.subscribe(e => {
      // tslint:disable-next-line:no-console
      console.debug('oauth/oidc event', e);
    });

    this.oauthService.events.filter(e => e.type === 'session_terminated').subscribe(e => {
      // tslint:disable-next-line:no-console
      console.debug('Your session has been terminated!');
    });
  }
}
