import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintAnalysisComponent } from './faceprint-analysis.component';

describe('FaceprintAnalysisComponent', () => {
  let component: FaceprintAnalysisComponent;
  let fixture: ComponentFixture<FaceprintAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
