import { Component, OnInit } from '@angular/core';
import pageContent from './../../content/repo-showcase.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public content:{name:string, code:string} = pageContent;

  constructor() { }

  ngOnInit() {
  }

  getDescription(name: string){
    return "a description";
  }

  getLink(name: string){
    return "#";
  }

}
