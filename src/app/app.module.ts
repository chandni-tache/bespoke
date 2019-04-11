import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { ApproutesModule } from './approutes.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopSkincareComponent } from './shop-skincare/shop-skincare.component';
import { CustomSkincareComponent } from './custom-skincare/custom-skincare.component';
import { FaceprintComponent } from './faceprint/faceprint.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShopSkincareComponent,
    CustomSkincareComponent,
    FaceprintComponent,
    IngredientsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ApproutesModule,
    AngularFontAwesomeModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
