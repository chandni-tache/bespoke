import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bespoke';
  show = false;
  footer = true;
  center_size;
  center_header_text = 'Skin';
  center_header_img;

  shop_skincare_active;
  blog_active;
  faceprint_active;
  ingredients_active;

  constructor(public route:Router){
        this.getting_route();
  }

  show_hide_features(){
    window.scroll(0,0);

    if(this.show) this.show = false;
    else this.show = true;

  }

  onClickedOutside_middle(){
    this.show = false;
  }

  //to replace the main menu images with active images
  navigate_to_feature_active(value){

    if (value === 'shop_skincare') {
      this.shop_skincare_active = true;
      this.blog_active = false;
      this.faceprint_active = false;
      this.ingredients_active = false;
    }
    else if (value === 'blog_skincare') {
      this.shop_skincare_active = false;
      this.blog_active = true;
      this.faceprint_active = false;
      this.ingredients_active = false;
    }
    else if (value === 'faceprint') {
      this.shop_skincare_active = false;
      this.blog_active = false;
      this.faceprint_active = true;
      this.ingredients_active = false;
    }
    else if (value === 'ingredients') {
      this.shop_skincare_active = false;
      this.blog_active = false;
      this.faceprint_active = false;
      this.ingredients_active = true;
    }else{
      this.shop_skincare_active = false;
      this.blog_active = false;
      this.faceprint_active = false;
      this.ingredients_active = false;
    }
  }

  getting_route(){
    this.route.events.subscribe((event)  => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case('/signup') :
          case('/login') :
          case('/cart_checkout') :
          case('/cart'):
            this.footer=false;
            this.navigate_to_feature_active('none');
            break;
          case('/shipping_address') :
            this.footer = false;
            this.navigate_to_feature_active('none');
            break;
          case('/home') :
            this.navigate_to_feature_active('none');
            break;
          case('/bespoke') :
          case('/product_details') :
            this.navigate_to_feature_active('shop_skincare')
            break;
          case('/bespoke/create') :
            this.navigate_to_feature_active('blog_skincare')
            break;
          case('/faceprint') :
            this.navigate_to_feature_active('faceprint')
            break;
          case('/bespoke/ingredients') :
          case('/bespoke/ingredients/ingredientname') :
            this.navigate_to_feature_active('ingredients')
            break;
          default:
            this.footer = true;
            this.navigate_to_feature_active('none');
        }
      }
    });
  }

  // header_center_logo_details(CENTER_SKIN){

  //   if(CENTER_SKIN) {
  //     this.center_header_text = 'Skin';
  //     this.center_header_img = '../../assets/img/shop_skincare_active.png';
  //   }else{
  //     this.center_header_text = 'Bespoke';
  //     this.center_header_img = '../../assets/img/bespoke_logo.png';
  //   }

  // }

  // // changing center logo and their text
  // header_center_logo(){
  //   if(this.center_skin){
  //     this.center_size = { header_center_skin_logo : true, header_center_bespoke_logo : false };
     
  //   }else{
  //     this.center_size = { header_center_skin_logo : false, header_center_bespoke_logo : true };
      
  //   }
  //   return this.center_size;
  // }

}
