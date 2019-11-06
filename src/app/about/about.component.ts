import { Component, OnInit } from '@angular/core';
import pageContent from './../../content/aboutme.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public content:{name:string, code:string} = pageContent;
  public show:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showBio(){
    this.show = !this.show;
  }
}
