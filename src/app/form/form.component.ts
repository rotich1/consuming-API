import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: string;
  user: User;
  searchGithubService: SearchGithubService;
  

  submitForm() {
    this.searchGithubService.getData(this.username)
  }

  constructor(searchGithubService: SearchGithubService) {
    this.searchGithubService = searchGithubService;
  }

  ngOnInit() {
    this.user = this.searchGithubService.user;
  }

}
