import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSkincareComponent } from './custom-skincare.component';

describe('CustomSkincareComponent', () => {
  let component: CustomSkincareComponent;
  let fixture: ComponentFixture<CustomSkincareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkincareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
