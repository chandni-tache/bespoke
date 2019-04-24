import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  // images = [
  //   {}
  // ];

  images = [1,2,3,4,5,6,7,8,9];

  // allantoin_2.png

  constructor() { }

  ngOnInit() {
  }

}
