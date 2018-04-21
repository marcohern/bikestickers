import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private router:Router, private bs:BikeService) { }

  ngOnInit() {
  }

  pay() {
    console.log("pay");
  }

  previous() {
    this.router.navigate(['/package']);
  }

}
