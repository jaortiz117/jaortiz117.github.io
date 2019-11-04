import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public show:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showResume(){
    this.show = true;
  }

  hideResume(){
    this.show = false;
  }

}
