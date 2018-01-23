import { Component, OnInit, AfterViewInit} from '@angular/core';
import { GastoComponent } from '../../gasto/index';
import { ContaComponent } from '../../conta/index';
declare var $:any;

@Component({
  	selector: 'app-form-planejamento',
  	templateUrl: './form-planejamento.component.html',
  	styleUrls: ['./form-planejamento.component.scss']
})
export class FormPlanejamentoComponent implements OnInit {

	adicionarGasto : boolean = false;
	adicionarConta : boolean = false;

	contaPlanejamento : ContaComponent[] = [];
	gastoPlanejamento : GastoComponent[] = [];

	tipoPlanejamento: any[] = 
	[
		{id:1, name: "Planejamento mensal"}, 
		{id:2, name: "Planejamento semanal"}, 
		{id:3, name: "Planejamento por meta"}
	]

  	constructor() { }

  	ngOnInit() {
	}

	ngAfterViewInit(){
		$(document).ready(function(){
			$('select').select();
			$('.datepicker').datepicker();
			$('.dropdown-trigger').dropdown();
	  	});
	}

	adicionarItemConta(event){
		let item : ContaComponent = event;
		this.contaPlanejamento.push(item);

		this.adicionarOcultarConta();
	}

	adicionarItemGasto(event){
		let item : GastoComponent = event;
		this.gastoPlanejamento.push(item);

		//Atualização do grafiro
		let clone = JSON.parse(JSON.stringify(this.chartData));
		clone[0].data.push(item.valor);
    	this.chartData = clone;

		this.chartLabels.push(item.nome);

		//this.adicionarGasto = false;
		this.adicionarOcultarGasto();
	}

	adicionarOcultarGasto(){
		if(this.adicionarGasto){
			this.adicionarGasto = false;
			return;
		}

		this.adicionarGasto = true;
		return;
	}

	adicionarOcultarConta(){
		if(this.adicionarConta){
			this.adicionarConta = false;
			return;
		}

		this.adicionarConta = true;
		return;
	}

	/**
	 * Configuração tabela - INICIO
	 */

	headerTable: string[] = ["Data", "Item", "Valor"];	
	bodyMensal: string[][] = [
		['01/01/2017', 'Almoço', 'R$ 30,00'],
		['01/01/2017', 'Lanche', 'R$ 10,00'],
		['01/01/2017', 'Jantar', 'R$ 40,00'],
		['26/12/2016', 'Roupas', 'R$ 200,00'],
		['23/12/2016', 'Mercado', 'R$ 300,00'],
		['22/12/2016', 'Presente', 'R$ 100,00'],
		['20/12/2016', 'Jantar', 'R$ 60,00'],
		['16/12/2016', 'Cinema', 'R$ 70,00'],
		['16/12/2016', 'Vinil', 'R$ 50,00'],
		['10/12/2016', 'Curso', 'R$ 150,00'],
		['26/11/2016', 'Kit de Faca', 'R$ 200,00'],
		['12/11/2016', 'Jogos', 'R$ 300,00']
	]

	public chartType: string = 'horizontalBar';
	public chartLegend: boolean = true;
	public chartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	/*
	public chartData: any[] = [
		{data: [800, 940, 750, 800, 715, 800, 1000], label: 'Valor limite'},
		{data: [770, 800, 900, 660, 820, 780, 80], label: 'Valor gasto'}
	];
	*/

	public chartData: any[] = [
		{data: [], label: 'Valor gasto'}
	];

	public chartLabels: string[] = [];

	public chartColors:Array<any> = [
		{ // grey
		  backgroundColor: 'rgba(0, 102, 0, 0.5)',
		  borderColor: 'rgba(0, 102, 0, 1)',
		  pointBackgroundColor: 'rgba(0, 102, 0, 1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(0, 102, 0, 0.8)'
		}
	  ];

	/**
	 * Configuração tabela - FIM
	 */
}
