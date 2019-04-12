import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-skincare',
  templateUrl: './shop-skincare.component.html',
  styleUrls: ['./shop-skincare.component.css']
})
export class ShopSkincareComponent implements OnInit {

  items = [
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/shop_bespoke.png"},
  ]

  items_CREATIONS = [
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'},
    {title:'Serum', info:"5% Hyaluronic Acid +3% Acetyl Glucosmaine", src:"assets/img/bottle_cart.png", price:'$399.99'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
