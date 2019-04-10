import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceprintComponent } from './faceprint.component';

describe('FaceprintComponent', () => {
  let component: FaceprintComponent;
  let fixture: ComponentFixture<FaceprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
