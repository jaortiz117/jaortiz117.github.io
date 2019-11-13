import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RepoData {
  name: string;
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GhRepoService {

  constructor(private _http: HttpClient) { }

  getAllRepoData(): RepoData[] {
    let data = [];
    this._http.get('https://api.github.com/users/jaortiz117/repos').subscribe(function(x){
      data = x;
    });
    var result = data.map(function(datum){
      return <RepoData>{
        name: datum.name,
        description: datum.description,
        url: datum.html_url
      };
    });

    return result;
  }
}
