import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupparentComponent } from './signupparent.component';

describe('SignupparentComponent', () => {
  let component: SignupparentComponent;
  let fixture: ComponentFixture<SignupparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
