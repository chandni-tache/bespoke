import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintLineComponent } from './faceprint-line.component';

describe('FaceprintLineComponent', () => {
  let component: FaceprintLineComponent;
  let fixture: ComponentFixture<FaceprintLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
