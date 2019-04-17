import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show_details='hide';
  show_details_btn = true;

  constructor() { }

  ngOnInit() {
  }

  show_hide_details(action){


      this.show_details = action;
    
  }

}
