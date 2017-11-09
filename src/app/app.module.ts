import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// DK.X
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { DealService } from './deal.service';

import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [DealService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
