import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  user: User;
  repository: Repo;
  repositoryData = [];
  newUserData: any = [];

  constructor(private http: HttpClient) {
    this.user = new User(0, "", "", new Date, true, "");
    this.repository = new Repo("", "", new Date, "", "", "", new Date)
  }

  getData(username: string) {

    this.repositoryData.length = 0;

    interface ApiResponse {
      public_repos: number,
      login: string,
      avatar_url: string,
      created_at: Date,
      html_url: string,
      hireable: boolean
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + username).toPromise().then(response => {
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;
        this.user.html_url = response.html_url;
        this.user.hireable = response.hireable;

        resolve();
      },
        error => {
          reject();
        })
      this.http.get<any>(environment.apiUrl + username + "/repos").toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.newUserData = new Repo(response[i].name, response[i].description, response[i].updated_at, response[i].clone_link, response[i].language, response[i].html_url, response[i].created_at);
          this.repositoryData.push(this.newUserData);
        }
        resolve();
      },
        error => {
          reject();
        })
    })
    return promise;
  }
}
