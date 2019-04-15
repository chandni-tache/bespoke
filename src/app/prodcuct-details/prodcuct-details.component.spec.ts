import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctDetailsComponent } from './prodcuct-details.component';

describe('ProdcuctDetailsComponent', () => {
  let component: ProdcuctDetailsComponent;
  let fixture: ComponentFixture<ProdcuctDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcuctDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
