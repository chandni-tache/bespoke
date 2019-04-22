import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintPigmentedComponent } from './faceprint-pigmented.component';

describe('FaceprintPigmentedComponent', () => {
  let component: FaceprintPigmentedComponent;
  let fixture: ComponentFixture<FaceprintPigmentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintPigmentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintPigmentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
