import { Component, OnInit, Input } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';
import { Flag } from '../models/flag';
import { Design } from '../models/design';
import { designs } from '../constants/designs';

@Component({
  selector: 'proride-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent extends RootBehavior implements OnInit {

  bgcode :string = 'sticker_bg_bardet';
  @Input() sticker:string = 'bardet';
  
  @Input() flag   :Flag   = null;
  @Input() design :Design = null;
  @Input() fname  :string = '<Nombre>';
  @Input() lname  :string = '<Apellido>';

  constructor() { 
    super();
    this.design = designs[0];
  }

  mapflag(flag:Flag) {
    if (flag==null) return this.root + "/assets/country-flags/svg/empty.svg";
    return this.root + "/assets/country-flags/svg/" + flag.code.toLocaleLowerCase() + ".svg";
  }

  mapdesign(design:Design) {
    if (design==null) return this.root + "/assets/proride/sticker_bg_bardet.png";
    return this.root + "/assets/proride/" + design.bg + ".png";
  }

  mapstyle(design:Design):string {
    if (design==null) return 'sticker-bardet';
    return design.style;
  }

  ngOnInit() {
  }

}
