import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendaComponent } from './renda.component';
import { RendaRoutingModule } from './renda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RendaRoutingModule
  ],
  declarations: [
    RendaComponent
  ]
})
export class RendaModule { }
