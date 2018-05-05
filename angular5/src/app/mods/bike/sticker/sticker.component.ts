import { Component, OnInit, Input } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';

@Component({
  selector: 'proride-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent extends RootBehavior implements OnInit {

  @Input() sticker:string = 'bardet';
  @Input() bgcode:string = 'sticker_bg_bardet';
  @Input() flagcode:string = 'co';
  @Input() fname:string = 'Marco';
  @Input() lname:string = 'Hernandez';

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
