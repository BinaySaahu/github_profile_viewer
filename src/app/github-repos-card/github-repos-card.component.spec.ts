import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReposCardComponent } from './github-repos-card.component';

describe('GithubReposCardComponent', () => {
  let component: GithubReposCardComponent;
  let fixture: ComponentFixture<GithubReposCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubReposCardComponent]
    });
    fixture = TestBed.createComponent(GithubReposCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
