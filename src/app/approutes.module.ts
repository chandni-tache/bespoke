import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopSkincareComponent } from './shop-skincare/shop-skincare.component';
import { ProdcuctDetailsComponent } from './prodcuct-details/prodcuct-details.component';

import { IngredientsComponent } from './ingredient_comp/ingredients/ingredients.component';
import { IngredientItemsComponent } from './ingredient_comp/ingredient-items/ingredient-items.component';
import { IngredientItemSourcesComponent } from './ingredient_comp/ingredient-item-sources/ingredient-item-sources.component';

import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { LoginComponent } from './login/login.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ShippingComponent } from './shipping/shipping.component';

import { IntellectualPropertyComponent } from './intellectual-property/intellectual-property.component';
import { LegalComponent } from './legal/legal.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { FaceprintComponent } from './faceprint_comp/faceprint/faceprint.component';
import { FaceprintOilyComponent } from './faceprint_comp/faceprint-oily/faceprint-oily.component';
import { FaceprintSensitiveComponent } from './faceprint_comp/faceprint-sensitive/faceprint-sensitive.component';
import { FaceprintLineComponent } from './faceprint_comp/faceprint-line/faceprint-line.component';
import { FaceprintPigmentedComponent } from './faceprint_comp/faceprint-pigmented/faceprint-pigmented.component';
import { FaceprintAnalysisComponent } from './faceprint_comp/faceprint-analysis/faceprint-analysis.component';

import { BlogComponent } from './blog/blog.component';

const approutes : Routes = [
  {path : '', redirectTo : 'home', pathMatch: 'full'},
  {path : 'home', component : DashboardComponent},
  {path : 'bespoke', component : ShopSkincareComponent},
  {path : 'blog/skin', component : BlogComponent },
  {path : 'faceprint', component : FaceprintComponent},
  {path : 'bespoke/ingredients', component : IngredientsComponent},
  {path : 'bespoke/ingredients/ingredientname', component : IngredientItemsComponent},
  {path : 'bespoke/ingredients/ingredientname/sources', component : IngredientItemSourcesComponent},
  {path : 'cart', component : CartComponent},
  {path : 'cart_details', component : CartDetailsComponent},
  {path : 'cart_checkout', component : CheckoutCartComponent},
  {path : 'login', component : LoginComponent},
  {path : 'shipping_address', component : ShippingAddressComponent},
  {path : 'product_details', component : ProdcuctDetailsComponent},
  {path : 'add_address', component : AddAddressComponent},
  {path : 'shipping', component : ShippingComponent},
  {path : 'ip', component : IntellectualPropertyComponent},
  {path : 'legal', component : LegalComponent},
  {path : 't&c', component : TermsConditionsComponent},
  {path : 'privacy_policy', component : PrivacyPolicyComponent},
  {path : 'faceprint/oily', component : FaceprintOilyComponent},
  {path : 'faceprint/sensitive', component : FaceprintSensitiveComponent},
  {path : 'faceprint/lined', component : FaceprintLineComponent},
  {path : 'faceprint/pigmented', component : FaceprintPigmentedComponent},
  {path : 'faceprint/analysis', component : FaceprintAnalysisComponent},

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(approutes, {scrollPositionRestoration: 'enabled'}) ],
  exports:[RouterModule]
})

export class ApproutesModule { }
