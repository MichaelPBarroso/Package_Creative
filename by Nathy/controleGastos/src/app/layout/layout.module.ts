import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { NavbarComponent, FooterComponent, NotFoundComponent } from './structure';
import { CardRevealComponent } from './cards';

import { DashboardComponent } from './dashboard';
import { GastoComponent, FormGastoComponent } from './gasto';
import { RendaComponent, FormRendaComponent, DetailRendaComponent } from './renda';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { CardBasicComponent } from './cards/card-basic/card-basic.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
    FormsModule,
    Ng2Charts,
    Ng2GoogleChartsModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    CardRevealComponent,

    DashboardComponent,
    RendaComponent,
    FormRendaComponent,
    DetailRendaComponent,
    GastoComponent,
    FormGastoComponent,
    PlanejamentoComponent,
    CardBasicComponent,
    CategoriaComponent,
    FormCategoriaComponent
  ]
})
export class LayoutModule { }
