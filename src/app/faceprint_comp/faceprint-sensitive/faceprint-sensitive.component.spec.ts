import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintSensitiveComponent } from './faceprint-sensitive.component';

describe('FaceprintSensitiveComponent', () => {
  let component: FaceprintSensitiveComponent;
  let fixture: ComponentFixture<FaceprintSensitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintSensitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintSensitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
