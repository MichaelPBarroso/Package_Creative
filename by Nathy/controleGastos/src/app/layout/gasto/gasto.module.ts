import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { GastoComponent } from './gasto.component';
import { GastoRoutingModule } from './gasto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GastoRoutingModule
  ],
  declarations: [
    //GastoComponent
  ]
})
export class GastoModule { }
