import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaComponent } from './abha.component';

describe('AbhaComponent', () => {
  let component: AbhaComponent;
  let fixture: ComponentFixture<AbhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
