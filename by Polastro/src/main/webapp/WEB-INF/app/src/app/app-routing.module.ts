import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'

const routes : Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  { path: 'restaurante', loadChildren: './layout/restaurante/restaurante.module#RestauranteModule' },
  { path: 'restaurante/cadastro', loadChildren: './layout/restaurante/form/form.module#FormModule' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
