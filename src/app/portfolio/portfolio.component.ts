import { Component, OnInit } from '@angular/core';
import { GhRepoService, RepoData } from './../gh-repo.service';
import pageContent from './../../content/repo-showcase.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public content:{name:string, code:string} = pageContent;
  public repoData: RepoData[];

  constructor(private repoService: GhRepoService) { }

  ngOnInit() {
    this.repoData = this.repoService.getAllRepoData();
  }

  getDescription(name: string){
    return "a description";
  }

  getLink(name: string){
    return "#";
  }

}
