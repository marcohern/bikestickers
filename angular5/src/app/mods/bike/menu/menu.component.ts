import { Component, OnInit } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';
import { BikeLangService } from '../bike-lang.service';

@Component({
  selector: 'mrc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends RootBehavior implements OnInit {
  
  public isCollapsed = true;

  constructor(private bsl:BikeLangService) { 
    super();
  }

  ngOnInit() {
    console.log("menu");
  }

  toggleMenu() {
    console.log("toggleMenu");
    this.isCollapsed = !this.isCollapsed;
  }

  setLanguage($event, lang) {
    $event.preventDefault();
    this.bsl.setLanguage(lang);
  }

}
