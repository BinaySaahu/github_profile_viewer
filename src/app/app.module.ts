import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { BodyComponent } from './body/body.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubReposCardComponent } from './github-repos-card/github-repos-card.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    GithubReposComponent,
    GithubReposCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
