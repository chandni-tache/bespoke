import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { Router, NavigationEnd } from "@angular/router";
// import { setTimeout } from 'timers';


@Component({
  selector: 'app-faceprint-pigmented',
  templateUrl: './faceprint-pigmented.component.html',
  styleUrls: ['./faceprint-pigmented.component.css'],
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
export class FaceprintPigmentedComponent implements OnInit {

  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  sliderVal;
  selected_cat;

  loading_screen=false;

  pigmented = [
    { title: 'No Sun Damage;Even Tone',  img: 'assets/img/faceprint/no-sun-damage.png' , classe:'no_sun'},
    { title: 'Slight Sun Damage',  img: 'assets/img/faceprint/slight-sun-damage.png', classe:'slight_sun' },
    { title: 'Extensive Sun Damage', img: 'assets/img/faceprint/ex-sun-damage.png', classe:'ext_sun' }
  ]

  constructor(public router:Router) { }

  ngOnInit() {
    this.sliderVal = 2;
    this.slider_change_val();
  }

  slider_change_val() {
    console.log( 'slider_change_val' ,this.sliderVal); 
    console.log( 'oily' ,this.pigmented); 
    this.selected_cat = this.pigmented[this.sliderVal];
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


  showloader(){
    if(!this.loading_screen) {
      window.scroll(0,0);
      
      this.loading_screen = true;

      setTimeout(() =>{
        this.router.navigate(['/faceprint/analysis'])
      }, 5000);
    } 

  }

}
