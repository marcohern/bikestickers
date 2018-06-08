import { Component, OnInit } from '@angular/core';
import { RequestService } from './mods/request/request.service';
import { RootBehavior } from './mods/bike/behaviors/root-behavior';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends RootBehavior implements OnInit {
  title = 'app';
  public isCollapsed = true;

  constructor(private rs:RequestService, private tr:TranslateService) {
    super();
    var lang = 'en';
    tr.setDefaultLang(lang);
    tr.use(lang);
  }

  collapseClick() {
    console.log("collapseClick");
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
}
