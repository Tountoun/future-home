import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHouseComponent } from './post-house.component';

describe('PostHouseComponent', () => {
  let component: PostHouseComponent;
  let fixture: ComponentFixture<PostHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostHouseComponent]
    });
    fixture = TestBed.createComponent(PostHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
