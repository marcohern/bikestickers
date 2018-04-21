import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proride-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  past:string[] = ['bg-dark','text-light'];
  present:string[] = ['bg-primary','text-light'];
  future:string[] = ['bg-light','text-dark'];

  crumbs:any[] = [
    {num:1, name:'Nombre/Pais', route:'/name-and-flag', level:0, cls:[] },
    {num:2, name:'Diseño'     , route:'/design'       , level:1, cls:[] },
    {num:3, name:'Empaque'    , route:'/package'      , level:2, cls:[] },
    {num:4, name:'Pago'       , route:'/billing'      , level:3, cls:[] }
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
    }

    this.crumbs[this._level].cls = this.present;

    for (i=this._level+1;i<this.crumbs.length;i++) {
      this.crumbs[i].cls = this.future;
    }
  }

  ngOnInit() {
    this.setClasses();
  }

}
