import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageComponentComponent } from './blog-page-component.component';

describe('BlogPageComponentComponent', () => {
  let component: BlogPageComponentComponent;
  let fixture: ComponentFixture<BlogPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
