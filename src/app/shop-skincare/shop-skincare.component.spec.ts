import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSkincareComponent } from './shop-skincare.component';

describe('ShopSkincareComponent', () => {
  let component: ShopSkincareComponent;
  let fixture: ComponentFixture<ShopSkincareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSkincareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
