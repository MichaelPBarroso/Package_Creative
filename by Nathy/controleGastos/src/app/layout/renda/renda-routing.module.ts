import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RendaComponent } from './renda.component';

const routes: Routes = [
	{ path: '', component: RendaComponent }
]

@NgModule({
  	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
  	declarations: []
})
export class RendaRoutingModule { }
