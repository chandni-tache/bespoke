import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-faceprint-sensitive',
  templateUrl: './faceprint-sensitive.component.html',
  styleUrls: ['./faceprint-sensitive.component.css'],
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
export class FaceprintSensitiveComponent implements OnInit {

  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  sliderVal;
  selected_cat;

  sensitive = [
    { title: 'Normal', img: 'assets/img/faceprint/normal.png' },
    { title: 'Sensitive', img: 'assets/img/faceprint/sensitive.png' },
    { title: 'Very Sensitive', img: 'assets/img/faceprint/v-sensitive.png' },
    // { title: 'Rosacea-prone', img: 'assets/img/faceprint/sensitive.png' }
  ]

  constructor() { }

  ngOnInit() {
    this.sliderVal = 2;
    this.slider_change_val();
  }

  slider_change_val() {
    console.log( 'slider_change_val' ,this.sliderVal); 
    console.log( 'oily' ,this.sensitive); 
    this.selected_cat = this.sensitive[this.sliderVal];
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
