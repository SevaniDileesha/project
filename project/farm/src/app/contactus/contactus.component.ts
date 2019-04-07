import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }
 

  ngOnInit() {
  }

}
