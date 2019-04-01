import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from "@angular/router";

import { GithubComponent } from "../git/git.component";
import { UserWelcomeComponent } from "../user-github/user-github.component";
//import { Error404Component } from "../error404/error404.component";

const routes:Routes=[
  {path:"git",component:GitComponent},
  {path:"home",component:UsergithubComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:Error404Component}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
