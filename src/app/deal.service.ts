import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { AuthService } from './auth.service';

import { Deal } from './deal';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'https://desktop-mcrlqhd/cache/api/deals/public';
  private privateDealsUrl = 'https://desktop-mcrlqhd/cache/api/deals/private';

  constructor(private http: Http, private authService: AuthService) { }

  // Implement a method to get the public deals
  // this service returns Promise, not Observable
  getPublicDeals() {

    return this.http
      .get(this.publicDealsUrl)
      .toPromise()
      .then(response => response.json() as Deal[])
      .catch(this.handleError);
  }

  // Implement a method to get the private deals
  // this service returns Promise
  getPrivateDeals() {
    const headers = new Headers(
      { 'Authorization': 'Bearer ' + this.authService.oauthService.getAccessToken() }
    );
    const options = new RequestOptions({ headers: headers });

    // @TODO: put headers into request
    return this.http
      .get(this.privateDealsUrl, options)
      .toPromise()
      .then(response => response.json() as Deal[])
      .catch(this.handleError);
  }

  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
