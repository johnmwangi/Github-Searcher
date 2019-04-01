import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { UsersService } from './users.service';
import { SearchComponent } from './search/search.component';
//import { RepocardsComponent } from './repocards/repocards.component';

const appRouting:Routes=[
  {
    path:'',component:UserInterfaceComponent
  },
  // {
  //   path:'repocards',component:RepocardsComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    UserInterfaceComponent,
    SearchComponent,
  //  RepocardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
