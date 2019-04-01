import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from "@angular/router";

import { GitComponent } from "../git/git.component";
import { UserGithubComponent } from "../user-github/user-github.component";
import { SrchComponent } from "../src/src.component";

const routes:Routes=[
  {path:"git",component:GitComponent},
  {path:"home",component:UsergithubComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:SrchComponent}
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
