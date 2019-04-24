import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientItemsComponent } from './ingredient-items.component';

describe('IngredientItemsComponent', () => {
  let component: IngredientItemsComponent;
  let fixture: ComponentFixture<IngredientItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
