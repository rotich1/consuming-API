import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo'


@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  user: User;
  repository: Repo;
  repositoryData = [];
  newUserData: any = [];

  constructor(private http: HttpClient) {
    this.user = new User(0, "", "", new Date);
    this.repository = new Repo("", "", new Date, "", "")
  }

  getData(username: string) {

    this.repositoryData.length = 0;

    interface ApiResponse {
      public_repos: number,
      login: string,
      avatar_url: string,
      created_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response => {
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;

        resolve();
      },
        error => {
          reject();
        })
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.newUserData = new Repo(response[i].name, response[i].description, response[i].updated_at, response[i].clone_link, response[i].language);
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
