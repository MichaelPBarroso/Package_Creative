import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'restaurante', loadChildren: './restaurante/restaurante.module#RestauranteModule' },
            { path: 'restaurante/cadastro', loadChildren: './restaurante/form/form.module#FormModule' },
            { path: 'not-found', component: NotFoundComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class LayoutRoutingModule { }
