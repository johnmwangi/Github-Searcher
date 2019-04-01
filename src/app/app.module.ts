import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './git/git.component';
import { SearchService } from "./search.service";
import { UserWelcomeComponent } from './user-github/user-github.component';
import { BgColorDirective } from './bg-color.directive';
//import { Error404Component } from './error404/error404.component';
import { DateCountPipe } from './keys.pipe';
import { SrchComponent } from './srch/srch.component';


@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    UserGithubComponent,
    BgColorDirective,
    //Error404Component,
    KeysPipe,
    SrchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
