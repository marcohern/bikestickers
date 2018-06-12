import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class BikeLangService {
  private static langId = 'com.marcohern.proride.lang';

  constructor(private tr:TranslateService) { }

  public initLanguage() {
    this.tr.setDefaultLang('es');
    this.tr.use(this.getBrowserLanguage());
  }

  private getBrowserLanguage():string {
    var lang = sessionStorage.getItem(BikeLangService.langId);
    if (lang != null) { return lang; }
    var locale = navigator.language;
    var localArr = locale.split('-');
    lang = localArr[0];
    sessionStorage.setItem(BikeLangService.langId, lang);
    return lang;
  }

  public setLanguage(lang:string) {
    sessionStorage.setItem(BikeLangService.langId, lang);
    this.tr.use(lang);
  }
}
