import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaceInfoComponent } from './bace-info.component';

describe('BaceInfoComponent', () => {
  let component: BaceInfoComponent;
  let fixture: ComponentFixture<BaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
