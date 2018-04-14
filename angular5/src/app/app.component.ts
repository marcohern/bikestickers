import { Component, OnInit } from '@angular/core';
import { RequestService } from './mods/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isCollapsed = true;

  constructor(private rs:RequestService) {}

  collapseClick() {
    console.log("collapseClick");
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    console.log("ngOnInit");

  }
}
