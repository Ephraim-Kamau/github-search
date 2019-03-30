import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private username: string;
  private clientapi = 'f025ef81925f23413aefd5f80b322edbbd1a9b1a';


constructor(private http:Http) {
  console.log('Ready!!')
this.username = 'Ephraim-Kamau';
 }


getProfileInfo() {
return this.http.get('https://api.github.com/users/' + this.username + '?this.clientapi' + 'this.clientapi')
}

getProfileRepos() {
  return this.http.get('https://api.github.com/users/' +  this.username +  '/repos?clientapi' + 'repos?clientapi')
}

updateProfile(username:string) {
  this.username = username;
}

 ngOnInit() { }

}
}
