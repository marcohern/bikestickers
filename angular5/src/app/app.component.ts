import { Component, OnInit } from '@angular/core';
import { RequestService } from './mods/request/request.service';
import { RootBehavior } from './mods/bike/behaviors/root-behavior';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends RootBehavior implements OnInit {
  title = 'app';
  public isCollapsed = true;

  constructor(private rs:RequestService) {
    super();
  }

  collapseClick() {
    console.log("collapseClick");
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    console.log("ngOnInit");

  }
}
