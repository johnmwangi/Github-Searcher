import { Injectable } from '@angular/core';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Repos } from "../repo/repos";
import { environment } from "../environments/environment";


@Injectable()
export class SearchService {
baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) {


 }
  gitSearch(){


}


  getRepos(userName:string):Observable<Repos[]>{
    return this.http.get<Repos[]>(this.baseUrl+"/users/"+ userName+"/repos")
}
  getUsers(userName:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"/users/"+ userName)


  }




}
