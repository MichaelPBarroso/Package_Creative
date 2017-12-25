import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './structure/not-found/not-found.component';
import { FormRendaComponent } from './renda/form-renda/form-renda.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'renda', loadChildren: './renda/renda.module#RendaModule' },
          { path: 'not-found', component: NotFoundComponent },
          { path: 'renda/cadastro', component: FormRendaComponent }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
