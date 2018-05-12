import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proride-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  @Input()
  asset: string = 'cover1';

  @Input()
  display: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

}
