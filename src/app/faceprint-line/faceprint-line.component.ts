import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-faceprint-line',
  templateUrl: './faceprint-line.component.html',
  styleUrls: ['./faceprint-line.component.css'],
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
export class FaceprintLineComponent implements OnInit {

  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  sliderVal;
  selected_cat;

  lined = [
    { title: 'Almost No Lines', img: 'assets/img/faceprint/almost-no-lines.png' },
    { title: 'Fine Lines', img: 'assets/img/faceprint/fine-lines.png' },
    { title: 'Deep Lines', img: 'assets/img/faceprint/deep-lines.png' }
  ]

  constructor() { }

  ngOnInit() {
    this.sliderVal = 2;
    this.slider_change_val();
  }

  slider_change_val() {
    console.log( 'slider_change_val' ,this.sliderVal); 
    console.log( 'oily' ,this.lined); 
    this.selected_cat = this.lined[this.sliderVal];
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
