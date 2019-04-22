import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-faceprint',
  templateUrl: './faceprint.component.html',
  styleUrls: ['./faceprint.component.css'],
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
export class FaceprintComponent implements OnInit {


  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  sliderVal;
  selected_cat;


  oily_Show = true;
  sensitive_Show = false;
  lined_Show = false;
  pigmented_Show = false;

  Oily_title;
  sensitive_title;
  lined_title;
  pigmented_title;

  faceprint = [
    {
      oily: [
        { title: 'Dry', title_line: 'How <b>oily</b> is your face?', img: 'assets/img/faceprint/dry.png' },
        { title: 'Very Dry', title_line: 'How <b>oily</b> is your face?', img: 'assets/img/faceprint/v-dry.png' },
        { title: 'Normal', title_line: 'How <b>oily</b> is your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Oily', title_line: 'How <b>oily</b> is your face?', img: 'assets/img/faceprint/oily.png' },
        { title: 'Very Oily;Acne-prone', title_line: 'How <b>oily</b> is your face?', img: 'assets/img/faceprint/v-oily.png' },
      ],
      sensitive: [
        { title: 'Normal', title_line: 'How <b>sensitive</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Sensitive', title_line: 'How <b>sensitive</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Very Sensitive', title_line: 'How <b>sensitive</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Rosacea-prone', title_line: 'How <b>sensitive</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' }
      ],
      lined: [
        { title: 'Almost No Lines', title_line: 'How <b>lined</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Fine Lines', title_line: 'How <b>lined</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Deep Lines', title_line: 'How <b>lined</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' }
      ],
      pigmented: [
        { title: 'No Sun Damage;Even Tone', title_line: 'How <b>pigmented</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Slight Sun Damage', title_line: 'How <b>pigmented</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' },
        { title: 'Extensive Sun Damage', title_line: 'How <b>pigmented</b> is the skin your face?', img: 'assets/img/faceprint_normal.png' }
      ]
    },
  ]

  constructor(private cdr: ChangeDetectorRef) { }
  
  ngAfterViewInit() {
    // this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  detectChanges(){
    // this.onClick();
  }

  ngOnInit() {
    this.sliderVal = 2;
    this.slider_change_val('oily');
    this.slider_change_val('sensitive');
    this.slider_change_val('lined');
    this.slider_change_val('pigmented');
  }

  ngAfterContentChecked() {
    var message = 'all done loading :)'
    console.log('message', message)
 }      

  slider_change_val(cat) {
    // console.log(this.sliderVal, cat);


    if (cat === 'oily') {
      this.selected_cat = this.faceprint[0].oily[this.sliderVal];
      this.Oily_title = this.selected_cat.title;


      // console.log(' this.selected_cat oily ', this.selected_cat );

    } else if (cat === 'sensitive') {
      this.selected_cat = this.faceprint[0].sensitive[this.sliderVal];
      this.sensitive_title = this.selected_cat.title;


      // console.log(' this.selected_cat sensitive', this.selected_cat );

    } else if (cat === 'lined') {
      this.selected_cat = this.faceprint[0].lined[this.sliderVal];
      this.lined_title = this.selected_cat.title;


      // console.log(' this.selected_cat lined', this.selected_cat );

    } else if (cat === 'pigmented') {
      this.selected_cat = this.faceprint[0].pigmented[this.sliderVal];
      this.pigmented_title = this.selected_cat.title;

      // console.log(' this.selected_cat pigmented', this.selected_cat );

    }
  }

  // changeState() {
  //   this.myStatusExp = this.myStatusExp === 'in' ? 'out' : 'in';
  // }

  changeView(val) {
    console.log('changeView', val)

    // this.changeState();

    if (val === 'oily') {
      // console.log('in oily');
      this.oily_Show = true;
      this.sensitive_Show = false;
      this.lined_Show = false;
      this.pigmented_Show = false;

    } else if (val === 'sensitive') {
      // console.log('in s');
      this.oily_Show = false;
      this.sensitive_Show = true;
      this.lined_Show = false;
      this.pigmented_Show = false;

    } else if (val === 'lined') {
      // console.log('in l');
      this.oily_Show = false;
      this.sensitive_Show = false;
      this.lined_Show = true;
      this.pigmented_Show = false;

    } else if (val === 'pigmented') {
      // console.log('in p');
      this.oily_Show = false;
      this.sensitive_Show = false;
      this.lined_Show = false;
      this.pigmented_Show = true;
    }
  }


  //animation functions starts--------------------

  onClick() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    console.log('onclick');
  }


  onDone(state) {
    if (this.enableAnimation) {
      this.slider_change_val(state);
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
