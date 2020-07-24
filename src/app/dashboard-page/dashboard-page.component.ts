import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  public data;
  constructor(private route: ActivatedRoute, private customer: CustomerService) { }

  ngOnInit() {
    this.data = this.route.snapshot.params;
    this.customer.deleteToken();
  }

}
