import { Component, OnInit } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends RootBehavior implements OnInit {

  values:any = {
    hashtag: "<a target='_blank' href='https://www.instagram.com/explore/tags/proridestickers/'>#ProrideStickers</a>",
    email:   "<a target='_blank' href='mailto:info@proride.com.co'>info@proride.com.co</a>",
    handle:  "<a target='_blank' href='https://www.instagram.com/proridecol/'>@proridecol</a>"
  };

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
