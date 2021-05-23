import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import {User} from '../user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user: User;
  respositoryDetails = [];
  searchGithubService: SearchGithubService;

  constructor(searchGithubService: SearchGithubService) {
    this.searchGithubService = searchGithubService;
   }

  ngOnInit() {
    this.user = this.searchGithubService.user;
    this.respositoryDetails = this.searchGithubService.repositoryData;
  }

}
