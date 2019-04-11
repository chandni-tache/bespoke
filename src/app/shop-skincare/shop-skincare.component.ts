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

  constructor() { }

  ngOnInit() {
  }

}
