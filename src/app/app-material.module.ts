import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  declarations: [],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule
  ]
})
export class MaterialModuleModule { }
