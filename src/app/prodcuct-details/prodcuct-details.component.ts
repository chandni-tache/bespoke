import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodcuct-details',
  templateUrl: './prodcuct-details.component.html',
  styleUrls: ['./prodcuct-details.component.css']
})
export class ProdcuctDetailsComponent implements OnInit {

  reviews_open = false;
  ingredients_open = false;
  how_to_use_open = false;

  reviews = [
    {title : 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in '},
    {title : 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna'},
    {title : 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor '},
  ];

  constructor() { }

  ngOnInit() {
  }

  show_hide_info(value, action) {
    console.log('scientific showhide', value);

    if (value === 'reviews') {

      if (action === 'close') this.reviews_open = false;
      else if (action === 'open') this.reviews_open = true;

    } else if (value === 'ingredients') {

      if (action === 'close') this.ingredients_open = false;
      else if (action === 'open') this.ingredients_open = true;


    } else if (value === 'how_to_use') {

      if (action === 'close') this.how_to_use_open = false;
      else if (action === 'open') this.how_to_use_open = true;


    }

  }

}
