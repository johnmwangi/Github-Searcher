iimport { Injectable } from '@angular/core';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Repos } from "../repo/repos";
import { environment } from "../../environments/environment";


@Injectable()
export class SearchService {
baseUrl = environment.baseUrl;
 constructor(private http:HttpClient) {
 // this.user=new User("","");


}
 gitSearch(){
 // interface ApiResponse{
 //   avatar_url:string;
 //   login:string
 //       }
 //       let promise=new Promise((resolve,reject)=>{
 //         this.http.get<ApiResponse>("https://api.github.com/users").toPromise().then(response=>{
 //           this.user.avatar_url=response[0].avatar_url
 //           this.user.login=response[0].login
 //           console.log(response)
 //           resolve()
 //         },
 //       error=>{
 //         this.user.login="an error occured try again"
 //       })
 //       })
 //       return promise



}


 getRepos(userName:string):Observable<Repos[]>{
   return this.http.get<Repos[]>(this.baseUrl+"/users/"+ userName+"/repos")
}
 getUsers(userName:string):Observable<User[]>{
   return this.http.get<User[]>(this.baseUrl+"/users/"+ userName)


 }




}
