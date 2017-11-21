import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteComponent } from './restaurante.component'
import { FormComponent } from './form/form.component'

const routes: Routes = [
    {path: '', component: RestauranteComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestauranteRoutingModule { }
