import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopSkincareComponent } from './shop-skincare/shop-skincare.component';
import { CustomSkincareComponent } from './custom-skincare/custom-skincare.component';
import { FaceprintComponent } from './faceprint/faceprint.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CartComponent } from './cart/cart.component';



const approutes : Routes = [
  {path : '', redirectTo : 'home', pathMatch: 'full'},
  {path : 'home', component : DashboardComponent},
  {path : 'bespoke', component : ShopSkincareComponent},
  {path : 'bespoke/create', component : CustomSkincareComponent},
  {path : 'faceprint', component : FaceprintComponent},
  {path : 'bespoke/ingredients', component : IngredientsComponent},
  {path : 'cart', component : CartComponent},
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(approutes) ],
  exports:[RouterModule]
})

export class ApproutesModule { }
