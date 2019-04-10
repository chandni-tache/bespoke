import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';




const approutes : Routes = [
  {path : '', redirectTo : 'dashboard', pathMatch: 'full'},
  {path : 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(approutes) ],
  exports:[RouterModule]
})

export class ApproutesModule { }
