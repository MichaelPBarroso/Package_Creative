import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planejamento',
  templateUrl: './planejamento.component.html',
  styleUrls: ['./planejamento.component.scss']
})
export class PlanejamentoComponent implements OnInit {

	planejamentoCadastrado : any[] = 
	[
		{id: 1, name: "Planejamento de Janeiro", tipo:"Mensal", dataCriacao:"01/01/2018"},
		{id: 2, name: "Compras final de ano", tipo:"Gastos", dataCriacao:"04/12/2017"},
		{id: 3, name: "Planejamento trimestal", tipo:"Trimestral", dataCriacao:"28/08/2017"}
	]

  constructor() { }

  ngOnInit() {
  }

}
