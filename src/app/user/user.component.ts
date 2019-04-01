import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  profile:any;
  repos:any;
  username: string;

  constructor(private profilesService: ProfilesService) {
   }

findProfile() {
  this.profilesService.updateProfile(this.username);
  this.profilesService.getProfileInfo().subscribe(profile => {

     this.profile = profile;
  });

 this.profilesService.getProfileRepos().subscribe(repos => {

    this.repos = repos;
});
}

  ngOnInit(){
  }
}
