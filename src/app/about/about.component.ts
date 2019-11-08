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
  public toggleShow :boolean[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  showBio(){
    this.show = !this.show;
  }

  toggleCard(index: number){
    this.toggleShow[index] = !this.toggleShow[index];
  }
}
