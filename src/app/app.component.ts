import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bespoke';
  show = false;

  constructor(public route:Router){}

  show_hide_features(){

    if(this.show) this.show = false;
    else this.show = true;

  }

  navigate_to_feature(value){

    if (value === 'shop_skincare') this.route.navigate(['/bespoke']);
    else if (value === 'custom_skincare') this.route.navigate(['/bespoke/crete']);
    else if (value === 'faceprint') this.route.navigate(['/faceprint']);
    else if (value === 'ingredients') this.route.navigate(['/bespoke/ingredients']);
  }
}
