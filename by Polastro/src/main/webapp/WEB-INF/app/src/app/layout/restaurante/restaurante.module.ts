import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ],
  declarations: [RestauranteComponent]
})
export class RestauranteModule { }