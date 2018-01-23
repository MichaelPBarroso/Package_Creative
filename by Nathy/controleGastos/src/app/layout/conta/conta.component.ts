import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

	nome: string;
	tipoConta: number;
	valorInicial: number;
	valorLimite: number;
	valorMensal: number;

  	constructor() { }

	ngOnInit() {
  	}

	contasCadastradas(){
		let contaCadastrada : any[] = 
			[
				{id: 1, name: "Cartão 1"},
				{id: 2, name: "Cartão 2"},
				{id: 3, name: "Vale Refeição"},
				{id: 4, name: "Cartão debito"}
			];

		return contaCadastrada;
	}
}
