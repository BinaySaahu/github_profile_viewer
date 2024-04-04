import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private clientSecrete = "034acddbce2e4cf5d582a9042f94639e5c0c9044"
  private clientId = "Iv1.4432e02e85cedbd8"

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}?client_id=${this.clientId}&client_secret=${this.clientSecrete}`)
  }
  getRepos(githubUsername: string){
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?client_id=${this.clientId}&client_secret=${this.clientSecrete}`)
  }
  getRepoLanguages(owner: string, repo: string){
    return this.httpClient.get(`https://api.github.com/repos/${owner}/${repo}/languages?client_id=${this.clientId}&client_secret=${this.clientSecrete}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
