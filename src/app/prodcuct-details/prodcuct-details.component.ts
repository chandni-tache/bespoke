import { Component, OnInit,  NgZone } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-prodcuct-details',
  templateUrl: './prodcuct-details.component.html',
  styleUrls: ['./prodcuct-details.component.css']
})
export class ProdcuctDetailsComponent implements OnInit {

  reviews_open = false;
  ingredients_open = false;
  how_to_use_open = false;
  star_main_size;

  write_review = false;
  enter_email = false;
  thnkyou_write_review = false;

  star_dynamic_size = '28px';

  reviews = [
    { rating: 4, title: 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ' },
    { rating: 3, title: 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { rating: 4, title: 'Great at this', info: 'Nicole L 22/03/2019', details: 'Lorem ipsum dolor ' },
  ];

  arr4 = [1, 2, 3, 4];
  arr3 = [1, 2, 3];

  constructor( private ngZone:NgZone) { }



  ngOnInit() {

    window.onresize = (e) =>
    {
        //ngZone.run will help to run change detection
        this.ngZone.run(() => {
            console.log("Width: " + window.innerWidth);
            console.log("Height: " + window.innerHeight);

            let width =window.innerWidth;

            if(width <= 329){
              this.star_main_size = '30px';
            }else if(width > 329 && width <= 660){
              this.star_main_size = '40px';
           
            }else if(width < 660 && width <= 759){
              this.star_main_size = '50px';
            
            }else if(width < 759 && width <= 1024){
              this.star_main_size = '60px';
            }else if(width < 1024 && width <= 1920){
              this.star_main_size = '70px';
            }
        });
    };
/*
@media only screen and (max-width : 320px) {}

@media only screen and (min-width : 330px) and (max-width : 660px) {}

@media only screen and (min-width : 661px) and (max-width:759px){}

@media only screen and (min-width : 760px) and (max-width : 1024px) {}

@media only screen and (min-width : 1025px) and (max-width : 1920px) {} */
    

   
    // this.breakpointObserver.observe(['(max-width: 1200px)']).subscribe(result => {
    //   console.log('result screen 1920', screen);

    //   let width =screen.width;

    //   console.log(screen.width);
    //   if(width <= 329){
    //     this.star_main_size = '30px';
    //   }else if(width > 329 && width <= 660){
    //     this.star_main_size = '40px';
     
    //   }else if(width < 660 && width <= 759){
    //     this.star_main_size = '50px';
      
    //   }else if(width < 759 && width <= 1024){
    //     this.star_main_size = '60px';
    //   }else if(width < 1024 && width <= 1920){
    //     this.star_main_size = '70px';
    //   }
    // });
    // this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
    //   console.log('result screen 768px', screen);
    //   this.star_main_size = '50px';
    // });
    // this.breakpointObserver.observe(['(max-width: 660px)']).subscribe(result => {
    //   console.log('result screen 660px', screen);
    //   this.star_main_size = '40px';
    // });
    // this.breakpointObserver.observe(['(max-width: 329px)']).subscribe(result => {
    //   console.log('result screen 329px', screen);
    //   this.star_main_size = '30px';
    //   console.log(screen.width);
    //   console.log(result);
    // });

  }


  close_review(val){

    if(val === "enter_email"){
      console.log('close_enter_email');
    
      this.enter_email = false;
    }else if(val === "write_review"){
      console.log('close_write_review');
    
      this.write_review = false;
    }

  }

  write_review_button(){
    console.log('write_review_button');
    this.write_review = false;
    this.enter_email = true;
  }

  show_write_rev(){
    console.log('show_write_rev');
    this.write_review = true;
    this.enter_email = false;
  }

  complete_write_rev(){
    console.log('show_write_rev');
    this.write_review = false;
    this.enter_email = false;
    this.thnkyou_write_review = true;
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

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    console.log(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
