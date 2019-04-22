import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


// packages
import { ClickOutsideModule } from 'ng-click-outside';

// modules
import { ApproutesModule } from './approutes.module';
import { MaterialModuleModule } from './app-material.module';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopSkincareComponent } from './shop-skincare/shop-skincare.component';
import { CustomSkincareComponent } from './custom-skincare/custom-skincare.component';
import { FaceprintComponent } from './faceprint_comp/faceprint/faceprint.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { LoginComponent } from './login/login.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProdcuctDetailsComponent } from './prodcuct-details/prodcuct-details.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ShippingComponent } from './shipping/shipping.component';
import { IntellectualPropertyComponent } from './intellectual-property/intellectual-property.component';
import { LegalComponent } from './legal/legal.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaceprintOilyComponent } from './faceprint_comp/faceprint-oily/faceprint-oily.component';
import { FaceprintSensitiveComponent } from './faceprint_comp/faceprint-sensitive/faceprint-sensitive.component';
import { FaceprintLineComponent } from './faceprint_comp/faceprint-line/faceprint-line.component';
import { FaceprintPigmentedComponent } from './faceprint_comp/faceprint-pigmented/faceprint-pigmented.component';
import { FaceprintAnalysisComponent } from './faceprint_comp/faceprint-analysis/faceprint-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShopSkincareComponent,
    CustomSkincareComponent,
    FaceprintComponent,
    IngredientsComponent,
    CartComponent,
    CartDetailsComponent,
    CheckoutCartComponent,
    LoginComponent,
    ShippingAddressComponent,
    ProdcuctDetailsComponent,
    AddAddressComponent,
    ShippingComponent,
    IntellectualPropertyComponent,
    LegalComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    FaceprintOilyComponent,
    FaceprintSensitiveComponent,
    FaceprintLineComponent,
    FaceprintPigmentedComponent,
    FaceprintAnalysisComponent
  ],
  imports: [
    BrowserModule,
    ApproutesModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ClickOutsideModule,
    RouterModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
