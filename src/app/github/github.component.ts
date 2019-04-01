import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user1;
  repos;
  userName: string;

  constructor(public apiservice: ApiService, private router: Router) {

    this.apiservice.getUserDetails().subscribe(user => {
      this.user1 = user;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  findUser() {
    this.apiservice.updateUserName(this.userName);
    this.apiservice.getUserDetails().subscribe(user => {
      this.user1 = user;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  ngOnInit() {

  }

}
