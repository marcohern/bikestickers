import { RootBehavior } from "./root-behavior";
import { VisualFlag } from "../models/visual-flag";
import { Sticker } from "../models/sticker";

export class FlagDisplayBehavior extends RootBehavior {

    flagPath(flag:VisualFlag):string {
      if (flag==null) return this.root + '/assets/country-flags/svg/empty.svg';
      return this.root + '/assets/country-flags/svg/' + flag.code.toLowerCase() + '.svg';
    }
  
    flagPngPath(flag:VisualFlag):string {
      if (flag==null) return this.root + '/assets/country-flags/svg/empty.svg';
      return this.root + '/assets/country-flags/png250px/' + flag.code.toLowerCase() + '.png';
    }

    flagName(flag:VisualFlag):string {
      if (flag==null) return '';
      return flag.name;
    }

    stickerFirstName(sticker:Sticker):string {
        if (sticker==null || sticker.fname == '') return '<Nombre>';
        return sticker.fname;
    }
    stickerLastName(sticker:Sticker):string {
        if (sticker==null || sticker.lname == '') return '<Apellido>';
        return sticker.lname;
    }

    flagX(flag:VisualFlag):number {
        if (flag==null) return 0;
        return flag.x;
    }
}
