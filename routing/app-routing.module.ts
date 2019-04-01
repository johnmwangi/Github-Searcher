import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingModule } from  "./routing/routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
          RoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
