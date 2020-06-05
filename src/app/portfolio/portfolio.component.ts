import { Component, OnInit, OnDestroy } from '@angular/core';
import { GhRepoService, RepoData } from './../gh-repo.service';
import { Observable, Subscription } from 'rxjs';

import pageContent from './../../content/repo-showcase.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  public content:{name:string, code:string} = pageContent;
  public repoData: RepoData[];
  public data: RepoData[];

  private repoSub$: Subscription
  constructor(private _repoService: GhRepoService) {

  }
  public ngOnInit(): void {
    this.repoSub$ = this._repoService.getAllRepoData().subscribe((data: RepoData[]) => {
      this.repoData = data;
      // console.log('Retrieved lucky number ${this.number}, for subscriber ${this.subscribersCount}');

    });
  }

  public ngOnDestroy(): void {
    this.repoSub$.unsubscribe();
  }

  getData(name: string){
    try {
      // this.repoData = await this._repoService.getAllRepoData().toPromise();

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
  getDescription(name: string){
    let result = this.getData(name);
    if(result){
      return result.description;
    }
    return "Github API is currently Busy and can't fetch a description or the repository is private";
  }

  getLink(name: string){
    let result = this.getData(name);
    if(result){
      return result.html_url;
    }
    return "https://github.com/jaortiz117";
  }

}
