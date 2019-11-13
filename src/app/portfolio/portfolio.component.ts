import { Component, OnInit } from '@angular/core';
import { GhRepoService, RepoData } from './../gh-repo.service.ts';
import pageContent from './../../content/repo-showcase.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public content:{name:string, code:string} = pageContent;
  public repoData: RepoData[] = [];

  constructor(private _repoService: GhRepoService) {  }

  ngOnInit() {
    this.repoData = this._repoService.getAllRepoData();
  }

  getDescription(name: string){
    var result = this.repoData.find(function(element){
      return element.name === name;
    });

    return result[0].description;
  }

  getLink(name: string){
    var result = this.repoData.find(function(element){
      return element.name === name;
    });
    return result[0].url;
  }

}
