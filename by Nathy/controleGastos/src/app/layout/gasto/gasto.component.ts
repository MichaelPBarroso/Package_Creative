import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.scss']
})
export class GastoComponent implements OnInit {

	nome : string;
	valor : number;
	data : Date;
	idConta : number;
	idCategoria : number;
	descricao : string;
	pagamentoRealizado : boolean = true;
	parcelado : boolean = false;
	numeroParcelas : number;

	gastoCadastrada : any[] = 
  	[
  		{id: 1, name: "Almoço", value: 30.00, date: "01/01/2017"},
  		{id: 1, name: "Lanche", value: 10.00, date: "01/01/2017"},
  		{id: 1, name: "Jantar", value: 40.00, date: "01/01/2017"},
  		{id: 1, name: "Roupas", value: 200.00, date: "26/12/2016"},
  		{id: 1, name: "Mercado", value: 300.00, date: "23/12/2016"},
  		{id: 1, name: "Presente", value: 100.00, date: "22/12/2016"},
  		{id: 1, name: "Jantar", value: 60.00, date: "20/12/2016"},
  		{id: 1, name: "Cinema", value: 70.00, date: "16/12/2016"},
  		{id: 1, name: "Vinil", value: 50.00, date: "16/12/2016"},
  		{id: 1, name: "Curso", value: 150.00, date: "10/12/2016"},
		{id: 1, name: "Kit de Faca", value: 200.00, date: "26/11/2016"},
		{id: 1, name: "Curso", value: 300.00, date: "12/11/2016"}
	]

	constructor() {
		
	}

	ngOnInit() {
	}

}
