import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { FooterComponent } from './structure/footer/footer.component';
import { NotFoundComponent } from './structure/not-found/not-found.component';
import { FormRendaComponent } from './renda/form-renda/form-renda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    FormRendaComponent
  ]
})
export class LayoutModule { }
