import { Component, OnInit, Input } from '@angular/core';
import { Crumb } from './crumb';

@Component({
  selector: 'proride-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  past:string[] = ['proride-bg-dark','text-light'];
  present:string[] = ['bg-primary','text-light'];
  future:string[] = ['bg-light','text-dark'];

  crumbs:Crumb[] = [
    {num:1, name:'BR COUNTRY NAME', route:'/name-and-flag', level:0, cls:[], enabled:true },
    {num:2, name:'BR DESIGN'      , route:'/design'       , level:1, cls:[], enabled:true },
    {num:3, name:'BR PACKAGE'     , route:'/package'      , level:2, cls:[], enabled:true },
    {num:4, name:'BR SEND'        , route:'/billing'      , level:3, cls:[], enabled:true },
  ]

  private _level:number = 0;

  @Input()
  set level(level:number) {
    this._level = level;
    this.setClasses();
  }

  constructor() { }

  private setClasses() {
    var i:number;
    for (i=0;i<this._level;i++) {
      this.crumbs[i].cls = this.past;
      this.crumbs[i].enabled = true;
    }

    this.crumbs[this._level].cls = this.present;
    this.crumbs[this._level].enabled = true;

    for (i=this._level+1;i<this.crumbs.length;i++) {
      this.crumbs[i].cls = this.future;
      this.crumbs[i].enabled = false;
    }
  }

  ngOnInit() {
    this.setClasses();
  }

}
