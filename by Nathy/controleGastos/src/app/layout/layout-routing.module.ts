import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './structure';
import { DashboardComponent } from './dashboard';
import { GastoComponent, FormGastoComponent } from './gasto';
import { ContaComponent, FormContaComponent, DetailContaComponent } from './conta';
import { CategoriaComponent, FormCategoriaComponent } from './categoria';
import { PlanejamentoComponent, FormPlanejamentoComponent, DetailPlanejamentoComponent } from './planejamento';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          //{ path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          //{ path: 'conta', loadChildren: './conta/conta.module#ContaModule' },
          //{ path: 'gasto', loadChildren: './gasto/gasto.module#GastoModule' },
          { path: '', component: DashboardComponent },
          { path: 'not-found', component: NotFoundComponent },
          { path: 'conta', component: ContaComponent },
          { path: 'conta/cadastro', component: FormContaComponent },
          { path: 'conta/detalhe', component: DetailContaComponent},
          { path: 'gasto', component: GastoComponent },
          { path: 'gasto/cadastro', component: FormGastoComponent },
          { path: 'categoria', component: CategoriaComponent },
          { path: 'categoria/cadastro', component: FormCategoriaComponent },
          { path: 'planejamento', component: PlanejamentoComponent },
          { path: 'planejamento/cadastro', component: FormPlanejamentoComponent },
          { path: 'planejamento/detalhe', component: DetailPlanejamentoComponent }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
