import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePopUpComponent } from './update-pop-up.component';

describe('UpdatePopUpComponent', () => {
  let component: UpdatePopUpComponent;
  let fixture: ComponentFixture<UpdatePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePopUpComponent]
    });
    fixture = TestBed.createComponent(UpdatePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
