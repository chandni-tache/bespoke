import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show_details='';
  show_details_btn = true;

  constructor() { }

  ngOnInit() {
  }

  show_hide_details(action){

    if(action == 'not hide'){
      this.show_details = 'hide';
    }else {
      this.show_details = action;
    }
  }

}
