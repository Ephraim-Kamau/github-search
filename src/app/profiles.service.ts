import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private username: string;
  private clientapi = 'f025ef81925f23413aefd5f80b322edbbd1a9b1a';


constructor(private http:HttpClient) {

//this.username = '';
 }


 getProfileInfo() {
 return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.clientapi)
 // 'https://api.github.com/users/daneden?access_token=' + apiKey
 }

 getProfileRepos() {
   return this.http.get('https://api.github.com/users/' +  this.username +  '/repos' + '?access_token=' + this.clientapi)
 }

updateProfile(username:string) {
  this.username = username;
}

 ngOnInit() { }

}
