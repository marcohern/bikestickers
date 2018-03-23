import { Component, OnInit } from '@angular/core';
import { RequestService } from './mods/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private rs:RequestService) {}

  ngOnInit() {
  	this.rs.get('http://www.google.com/search', {q:'Marco Hernandez'})
  		.subscribe(response => {
  			console.log(response);
  		});
  }
}
