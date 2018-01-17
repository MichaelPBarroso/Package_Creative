import { Component, OnInit, AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  	selector: 'app-form-planejamento',
  	templateUrl: './form-planejamento.component.html',
  	styleUrls: ['./form-planejamento.component.scss']
})
export class FormPlanejamentoComponent implements OnInit {

	item : string;
	adicionarGasto : boolean = false;
	adicionarConta : boolean = false;

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
	  	});
	}

	adicionar(event){
		this.item = event;
		this.adicionarGasto = false;
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

	public chartData: any[] = [
		{data: [800, 940, 750, 800, 715, 800, 1000], label: 'Valor limite'},
		{data: [770, 800, 900, 660, 820, 780, 80], label: 'Valor gasto'}
	];

	public chartLabels: string[] = [
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro'
	];
	onChartSelectionChange(chart){
		if(chart){
			if(chart == 'line'){
				this.chartType = 'line';
			}else if(chart == 'bar'){
				this.chartType = 'horizontalBar';
			}
		}
	}
}
