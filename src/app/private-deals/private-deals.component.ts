import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal';

import { DealService } from '../deal.service';

@Component({
  selector: 'app-private-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: './private-deals.component.html',
  styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals: Deal[];

  constructor(private dealService: DealService) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.dealService.getPrivateDeals()
      .then(deals => this.privateDeals = deals);
  }

  purchase(item) {
    alert('You bought the: ' + item.name);
  }
}
