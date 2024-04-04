import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent{
  profile = [] as any;
  repos = [] as any;
  userName:string = ""
  
  constructor(
    private apiService: ApiService
  ) {}
  onKey(event:any) {
    this.userName = event.target.value;
    console.log(this.userName)
  }
  search() {
    this.apiService.getUser(this.userName).subscribe(profile=>{
      this.profile = profile
      console.log(this.profile)
    });

    this.apiService.getRepos(this.userName).subscribe(repos=>{
      this.repos = repos
      console.log(this.repos)
    })

    
  }
  

}
