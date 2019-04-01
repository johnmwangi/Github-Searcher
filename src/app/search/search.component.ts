import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class MasterComponent implements OnInit {

  users;
  repos;
  userName: string;

  constructor(public apiservice: ApiService, private router: Router) {

    this.apiservice.getUserDetails().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  findUser() {
    this.apiservice.updateUserName(this.userName);
    this.apiservice.getUserDetails().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  ngOnInit() {

  }

}
