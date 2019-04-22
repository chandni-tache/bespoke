import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-faceprint-oily',
  templateUrl: './faceprint-oily.component.html',
  styleUrls: ['./faceprint-oily.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ 'opacity': '1' })),
      state('out', style({ 'opacity': '0' })),
      transition('* <=> *', [
        animate(500)
      ])
    ])
  ]
})
export class FaceprintOilyComponent implements OnInit {

  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  sliderVal;
  selected_cat;

  oily = [
    { title: 'Dry', img: 'assets/img/faceprint/dry.png' },
    { title: 'Very Dry',  img: 'assets/img/faceprint/v-dry.png' },
    { title: 'Normal', img: 'assets/img/faceprint_normal.png' },
    { title: 'Oily',  img: 'assets/img/faceprint/oily.png' },
    { title: 'Very Oily;Acne-prone', img: 'assets/img/faceprint/v-oily.png' },
  ];

  constructor() { }

  ngOnInit() {
    this.sliderVal = 2;
    this.slider_change_val();
  }

  slider_change_val() {
    console.log( 'slider_change_val' ,this.sliderVal); 
    console.log( 'oily' ,this.oily); 
    this.selected_cat = this.oily[this.sliderVal];
  }

  //animation functions starts--------------------

  onClick() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    console.log('onclick');
  }


  onDone() {
    if (this.enableAnimation) {
      this.slider_change_val();
      this.toggleState();
    }
    console.log('onDone');
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
    console.log('toggleState');
  }

  //animation functions ends--------------------


}
