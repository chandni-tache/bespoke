import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intellectual-property',
  templateUrl: './intellectual-property.component.html',
  styleUrls: ['./intellectual-property.component.css']
})
export class IntellectualPropertyComponent implements OnInit {

  trademark_show=false;
  property_show=false;
  patent_show=false;

  constructor() { }

  ngOnInit() {
  }

  changeStatus(col){
    if(col=='trademark'&& this.trademark_show){
      this.trademark_show =false;
    }else if(col=='trademark'&& !this.trademark_show){
      this.trademark_show=true;
    }else if(col=='property'&& this.property_show){
      this.property_show=false;
    }else if(col=='property'&& !this.property_show){
      this.property_show=true;
    }else if(col=='patent'&& this.patent_show){
      this.patent_show=false;
    }else if(col=='patent'&& !this.patent_show){
      this.patent_show=true;
    }
    // if(this.trademark_show){
    //   this.trademark_show =false;
    // }else{
    // }
  }

}
