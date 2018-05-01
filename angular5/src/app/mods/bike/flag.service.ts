import { Injectable } from '@angular/core';
import { Flag } from './flag';
import { flags } from './flags';
import { environment } from '../../../environments/environment';

@Injectable()
export class FlagService {

  constructor() { }

  public getFlags() {
    return flags;
  }

  filterFlags(query:string = null) {
    var q = query.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var flags = this.getFlags();
    if (q==null || q=='') return flags;
    var filteredFlags:Flag[] = [];
    for(let flag of flags) {
      var flagname = flag.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if (flagname.includes(q)) {
        filteredFlags.push(flag);
      }
    }
    return filteredFlags;
  }

  flagPath(flag:Flag) {
    if (flag==null) return '';
    return environment.root + '/assets/country-flags/svg/' + flag.code.toLowerCase() + '.svg';
  }
}
