import { Component, OnInit } from '@angular/core';
import { GhRepoService, RepoData } from './../gh-repo.service';
import { Observable } from 'rxjs';

import pageContent from './../../content/repo-showcase.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public content:{name:string, code:string} = pageContent;
  public repoData: RepoData[];
  public data: RepoData[];

  constructor(private _repoService: GhRepoService) {

  }

  ngOnInit() {

    // this.repoData$.subscribe(function(x){
    //   x.forEach(e => {
    //     this.data.push(e);
    //   })
    // });
  }

  async getData(name: string){
    try {
      this.repoData = await this._repoService.getAllRepoData().toPromise();

      let result: RepoData;

      this.repoData.forEach(function(x){
        if(x.name == name){
          result = x;
        }
      });

      return result;
    }
    catch(err) {
      return null;
    }
  }
  async getDescription(name: string){
    let result = await this.getData(name);
    if(result){
      return result.description;
    }
    return "Github API is currently Busy and can't fetch a description";
  }

  async getLink(name: string){
    let result = await this.getData(name);
    if(result){
      return result.html_url;
    }
    return "https://github.com/jaortiz117";
  }

}
