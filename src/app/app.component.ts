import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // profile = [] as any;
  // constructor(
  //   private apiService: ApiService
  // ) {}

  // ngOnInit() {
  //   this.apiService.getUser('BinaySaahu').subscribe(profile=>{
  //     console.log(profile)
  //     this.profile = profile
  //   });
  // }
}
