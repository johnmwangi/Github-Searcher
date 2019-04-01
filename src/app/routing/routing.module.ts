import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { GithubComponent } from '../github/github.component';
import { RepoComponent } from '../repo/repo.component';

const routes: Routes = [

  { path: '', redirectTo: 'github', pathMatch: 'full' },
  { path: "github", component: GithubComponent },
  { path: "repo", component: RepoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
