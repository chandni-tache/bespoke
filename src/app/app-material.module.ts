import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule]
})
export class MaterialModuleModule { }
