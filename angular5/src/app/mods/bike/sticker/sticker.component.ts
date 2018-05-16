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

   mapbg():string {
    if (this.design==null || this.flag == null) return this.root + "/assets/sticker-flags/de_bardet.png";
    return this.root + "/assets/sticker-flags/" + this.flag.code.toLocaleLowerCase() + "_"+ this.design.code +".png";
  }

  mapcode() {
    if (this.design==null) return 'bardet';
    return this.design.code;
  }

  ngOnInit() {
  }

}
