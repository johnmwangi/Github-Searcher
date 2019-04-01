import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-error404',
  templateUrl: './srch.component.html',
  styleUrls: ['./srch.component.css']
})
export class Error404Component implements OnInit {

  constructor(private router:Router) { }
  goBack(){
      this.router.navigate(["/home"])
  }

  ngOnInit() {
  }

}
