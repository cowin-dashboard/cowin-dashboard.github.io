import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSigninComponent } from './register-signin.component';

describe('RegisterSigninComponent', () => {
  let component: RegisterSigninComponent;
  let fixture: ComponentFixture<RegisterSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
