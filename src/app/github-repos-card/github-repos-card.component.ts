import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-github-repos-card',
  templateUrl: './github-repos-card.component.html',
  styleUrls: ['./github-repos-card.component.scss']
})
export class GithubReposCardComponent implements OnInit {
  @Input() repo:any
  languages: object = {}
  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit() {
    this.apiService.getRepoLanguages(this.repo.owner.login,this.repo.name).subscribe((res:any)=>{
      this.languages = res
      console.log(res)
    })
  }
}
