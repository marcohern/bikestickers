import { Component, OnInit } from '@angular/core';
import { RequestService } from './mods/request/request.service';
import { RootBehavior } from './mods/bike/behaviors/root-behavior';
import {TranslateService} from '@ngx-translate/core';
import { BikeLangService } from './mods/bike/bike-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends RootBehavior implements OnInit {
  private static langId = 'com.marcohern.proride.lang';
  title = 'app';
  public isCollapsed = true;

  constructor(private rs:RequestService, private bls:BikeLangService) {
    super();
    this.bls.initLanguage();
  }

  collapseClick() {
    console.log("collapseClick");
    this.isCollapsed = !this.isCollapsed;
  }

  getBrowserLanguage():string {
    var lang = sessionStorage.getItem(AppComponent.langId);
    if (lang != null) {
      return lang;
    }
    var locale = navigator.language;
    var localArr = locale.split('-');
    lang = localArr[0];
    sessionStorage.setItem(AppComponent.langId, lang);
    return lang;
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
}
