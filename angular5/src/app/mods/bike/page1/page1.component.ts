import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  flags:any = [
    {"selector":"flag-colombia", "name":"colombia"},
    {"selector":"flag-iran", "name":"iran"},
    {"selector":"flag-argentina", "name":"argentina"},
    {"selector":"flag-ukraine", "name":"ukraine"},
    {"selector":"flag-germany", "name":"germany"},
    {"selector":"flag-hong-kong", "name":"hong kong"},
    {"selector":"flag-united-arab-emirates", "name":"united arab emirates"},
    {"selector":"flag-laos", "name":"laos"},
    {"selector":"flag-ireland", "name":"ireland"},
    {"selector":"flag-greece", "name":"greece"},
    {"selector":"flag-denmark", "name":"denmark"},
    {"selector":"flag-sweden", "name":"sweden"}
  ];

  flag:any = null;
  username:string = '';

  constructor() { }

  ngOnInit() {

  }

  selectFlag(flag:any) {
    console.log(flag);
    this.flag = flag;
  }

  getFlagSelector() {
    if (this.flag==null) return '';
    return this.flag.selector;
  }

  getFlagName() {
    if (this.flag==null) return '';
    return this.flag.name;
  }

  next() {
    console.log(this.username,this.flag);
  }
}
