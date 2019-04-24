import { Component, OnInit } from '@angular/core';
// import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-ingredient-items',
  templateUrl: './ingredient-items.component.html',
  styleUrls: ['./ingredient-items.component.css']
})
export class IngredientItemsComponent implements OnInit {

  // youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
  // youtubeId = 'iHhcHTlGtRs';

  irritationVal;
  oilinessVal;

  constructor() { 
    // private embedService: EmbedVideoService
    // console.log(this.embedService.embed(this.youtubeUrl));
  }

  ngOnInit() {

    this.irritationVal = 5;
    this.oilinessVal = 2;
  }

}
