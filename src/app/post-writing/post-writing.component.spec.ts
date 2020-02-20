import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostWritingComponent } from "./post-writing.component";

describe("PostWritingComponent", () => {
  let component: PostWritingComponent;
  let fixture: ComponentFixture<PostWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostWritingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
