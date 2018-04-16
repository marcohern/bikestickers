import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
    console.log("menu");
  }

  toggleMenu() {
    console.log("toggleMenu");
    this.isCollapsed = !this.isCollapsed;
  }

}
