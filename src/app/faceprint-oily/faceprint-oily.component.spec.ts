import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintOilyComponent } from './faceprint-oily.component';

describe('FaceprintOilyComponent', () => {
  let component: FaceprintOilyComponent;
  let fixture: ComponentFixture<FaceprintOilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintOilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintOilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
