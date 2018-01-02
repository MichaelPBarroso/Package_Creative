import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
//import { CardRevealComponent } from '../cards/card-reveal/card-reveal.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    //DashboardComponent,
    //CardRevealComponent
  ]
})
export class DashboardModule { }
