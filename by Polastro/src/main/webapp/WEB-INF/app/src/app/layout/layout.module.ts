import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NotFoundComponent,
    MenuComponent
  ]
})
export class LayoutModule { }
