import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientItemSourcesComponent } from './ingredient-item-sources.component';

describe('IngredientItemSourcesComponent', () => {
  let component: IngredientItemSourcesComponent;
  let fixture: ComponentFixture<IngredientItemSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientItemSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientItemSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
