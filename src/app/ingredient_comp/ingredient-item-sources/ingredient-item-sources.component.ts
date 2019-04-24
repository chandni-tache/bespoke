import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-item-sources',
  templateUrl: './ingredient-item-sources.component.html',
  styleUrls: ['./ingredient-item-sources.component.css']
})
export class IngredientItemSourcesComponent implements OnInit {

  scientific_open = false;
  supplier_open = false;

  constructor() { }

  ngOnInit() {
  }

  show_hide_info(value, action) {
    console.log('scientific showhide', value);

    if (value === 'scientific') {

      if (action === 'close') this.scientific_open = false;
      else if (action === 'open') this.scientific_open = true;

    } else if (value === 'supplier') {

      if (action === 'close') this.supplier_open = false;
      else if (action === 'open') this.supplier_open = true;


    }

  }
}
