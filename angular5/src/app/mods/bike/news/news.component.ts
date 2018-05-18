import { Component, OnInit } from '@angular/core';
import { RootBehavior } from '../behaviors/root-behavior';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends RootBehavior implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
