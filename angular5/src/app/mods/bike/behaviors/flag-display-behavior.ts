import { RootBehavior } from "./root-behavior";
import { Flag } from "../models/flag";
import { Sticker } from "../models/sticker";

export class FlagDisplayBehavior extends RootBehavior {

    flagPath(flag:Flag) {
      if (flag==null) return this.root + '/assets/country-flags/svg/empty.svg';
      return this.root + '/assets/country-flags/svg/' + flag.code.toLowerCase() + '.svg';
    }
  
    flagPngPath(flag:Flag) {
      if (flag==null) return this.root + '/assets/country-flags/svg/empty.svg';
      return this.root + '/assets/country-flags/png250px/' + flag.code.toLowerCase() + '.png';
    }

    flagName(flag:Flag) {
      if (flag==null) return '';
      return flag.name;
    }

    stickerFirstName(sticker:Sticker) {
        if (sticker==null || sticker.fname == '') return '<Nombre>';
        return sticker.fname;
    }
    stickerLastName(sticker:Sticker) {
        if (sticker==null || sticker.lname == '') return '<Apellido>';
        return sticker.lname;
    }

    flagX(flag:Flag) {
        if (flag==null) return 0;
        return flag.x;
    }
}
