import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
