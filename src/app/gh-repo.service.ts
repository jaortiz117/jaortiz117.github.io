import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface RepoData {
  name: string;
  description: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GhRepoService {

  constructor(private _http: HttpClient) { }

  getAllRepoData(): Observable<RepoData[]> {

    return this._http.get<RepoData[]>('https://api.github.com/users/jaortiz117/repos').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};
}
