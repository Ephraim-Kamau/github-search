import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  public username: string;
  private clientapi = environment.apiKey;
  private url = environment.apiUrl;


constructor(private http:HttpClient) {

//this.username = '';
 }


 getProfileInfo() {
 return this.http.get(this.url/ + this.username + '/?access_token=' + this.clientapi)
 // 'https://api.github.com/users/daneden?access_token=' + apiKey
 }

 getProfileRepos() {
   return this.http.get(this.url +  this.username +  '/repos' + '?access_token=' + this.clientapi)
 }

updateProfile(username:string) {
  this.username = username;
}

 ngOnInit() { }

}
