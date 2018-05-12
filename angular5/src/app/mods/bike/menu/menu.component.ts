import { Component, OnInit } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';

@Component({
  selector: 'mrc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends RootBehavior implements OnInit {
  
  public isCollapsed = true;

  constructor() { 
    super();
  }

  ngOnInit() {
    console.log("menu");
  }

  toggleMenu() {
    console.log("toggleMenu");
    this.isCollapsed = !this.isCollapsed;
  }

}
