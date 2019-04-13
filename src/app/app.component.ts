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

  constructor(public route:Router){
        this.getting_route();
  }

  show_hide_features(){

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
          case('/shipping_address') :
            this.footer = false;
            break;
          case('/home') :
            console.log( 'dashboard');
            break;
          default:
            this.footer = true;
        }
      }
    });
  }


}
