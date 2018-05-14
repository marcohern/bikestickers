import { Component, OnInit, Input } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';
import { VisualFlag } from '../models/visual-flag';
import { VisualDesign } from '../models/visual-design';
import { designs } from '../constants/designs';

@Component({
  selector: 'proride-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent extends RootBehavior implements OnInit {

  bgcode :string = 'sticker_bg_bardet';
  @Input() sticker:string = 'bardet';
  
  @Input() flag   :VisualFlag   = null;
  @Input() design :VisualDesign = null;
  @Input() fname  :string = '<Nombre>';
  @Input() lname  :string = '<Apellido>';
  @Input() mode   :string = '';

  constructor() { 
    super();
    this.design = designs[0];
  }

  mapflag(flag:VisualFlag):string {
    if (flag==null) return this.root + "/assets/country-flags/svg/empty.svg";
    return this.root + "/assets/country-flags/svg/" + flag.code.toLocaleLowerCase() + ".svg";
  }

  mapflagname(flag:VisualFlag):string {
    if (flag==null) return "Bandera";
    return flag.name;
  }

  mapdesign(design:VisualDesign):string {
    if (design==null) return this.root + "/assets/proride/sticker_bg_bardet.png";
    return this.root + "/assets/proride/" + design.bg + ".png";
  }


  mapsample(design:VisualDesign):string {
    if (design==null) return this.root + "/assets/proride/sample_bardet.png";
    return this.root + "/assets/proride/sample_" + design.code + ".png";
  }

  mapstyle(design:VisualDesign):string {
    if (design==null) return 'sticker-bardet';
    return design.style;
  }

  ngOnInit() {
  }

}
