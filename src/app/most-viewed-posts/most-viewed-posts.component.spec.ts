import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedPostsComponent } from './most-viewed-posts.component';

describe('MostViewedPostsComponent', () => {
  let component: MostViewedPostsComponent;
  let fixture: ComponentFixture<MostViewedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostViewedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
