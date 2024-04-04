import { Component,Input, NgModule, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})


export class GithubReposComponent implements OnChanges{
  @Input() repos:any
  constructor() {
    
  }

  req_repos:any = []

  counter:any = 1

  pageSize = 10; // Default page size
  pageSizes = [10,25,50,100]

  page_num:any = 0
  len:any
  numbers: number[] = [];
  

  ngOnChanges(){
    this.len = Math.ceil(this.repos.length / this.pageSize)
    console.log(this.len)
    this.numbers = Array.from({ length: Math.ceil(this.repos.length / this.pageSize) }, (_, i) => i); 
  }
  // Function to update page size based on selection
  onPageSizeChange(event:any) {
    // this.len = Math.ceil(this.repos.length / this.pageSize)
    const newSize = event.target.value;
    this.pageSize = newSize;
    this.numbers = Array.from({ length: Math.ceil(this.repos.length / newSize)}, (_, i) => i);
  }

  // Function to calculate starting index for current page
  getStartIndex(pageNumber: number) {
    this.counter = pageNumber
    return pageNumber * this.pageSize;
  }

  getPageNumber(pageNumber:number){
    this.page_num = pageNumber
    console.log(pageNumber)
  }

  // Function to get a slice of repositories for the current page
  getPaginatedRepositories() {
    const startIndex = this.getStartIndex(this.page_num);
    return this.repos.slice(startIndex, startIndex + this.pageSize);
  }
  hasNextPage(): boolean {
    return (this.page_num + 1) * this.pageSize < this.repos.length;
  }

  // Function to check if previous page is available
  hasPreviousPage(): boolean {
    return this.page_num >= 1;
  }
  changePage(direction: 'next' | 'previous') {
    if (direction === 'next' && this.hasNextPage()) {
      this.page_num++;
    } else if (direction === 'previous' && this.hasPreviousPage()) {
      this.page_num--;
    }
  }
}
