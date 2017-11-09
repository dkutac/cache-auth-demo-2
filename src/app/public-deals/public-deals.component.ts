
import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal';

// import { AppComponent } from '../app.component';
import { DealService } from '../deal.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-public-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals;

  isUserAuthenticated: boolean;

  constructor(private dealService: DealService, private authService: AuthService) {
      this.isUserAuthenticated = authService.isUserAuthenticated;
  }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.dealService.getPublicDeals()
      .then(deals => this.publicDeals = deals);
  }

  purchase(item) {
    alert('You bought the: ' + item.name);
  }
}
