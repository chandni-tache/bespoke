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
  center_skin = true;
  center_size;
  center_header_text = 'Skin';
  center_header_img;

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

  navigate_to_feature(value){

    if (value === 'shop_skincare') this.route.navigate(['/bespoke']);
    else if (value === 'custom_skincare') this.route.navigate(['/bespoke/create']);
    else if (value === 'faceprint') this.route.navigate(['/faceprint']);
    else if (value === 'ingredients') this.route.navigate(['/bespoke/ingredients']);
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

            this.center_skin = false;
            // this.center_header_text = 'Bespoke';
            break;
          case('/shipping_address') :
            this.footer = false;
            this.center_skin = false;
            // this.center_header_text = 'Bespoke';
            break;
          case('/home') :
            console.log( 'dashboard');

            this.center_skin = true;
            // this.center_header_text = 'Skin';
            break;
          default:
            this.footer = true;
            // this.center_skin = false;
          
        }
        // console.log('this.center_skin',this.center_skin);
        // this.header_center_logo_details( this.center_skin )
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
