import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './structure';
import { DashboardComponent } from './dashboard';
import { GastoComponent, FormGastoComponent } from './gasto';
import { RendaComponent, FormRendaComponent, DetailRendaComponent } from './renda';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          //{ path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          //{ path: 'renda', loadChildren: './renda/renda.module#RendaModule' },
          //{ path: 'gasto', loadChildren: './gasto/gasto.module#GastoModule' },
          { path: '', component: DashboardComponent },
          { path: 'renda', component: RendaComponent },
          { path: 'renda/cadastro', component: FormRendaComponent },
          { path: 'renda/detalhe', component: DetailRendaComponent},
          { path: 'gasto', component: GastoComponent },
          { path: 'gasto/cadastro', component: FormGastoComponent },
          { path: 'not-found', component: NotFoundComponent }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
