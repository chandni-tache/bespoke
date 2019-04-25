import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySkincareComponent } from './body-skincare.component';

describe('BodySkincareComponent', () => {
  let component: BodySkincareComponent;
  let fixture: ComponentFixture<BodySkincareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySkincareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
