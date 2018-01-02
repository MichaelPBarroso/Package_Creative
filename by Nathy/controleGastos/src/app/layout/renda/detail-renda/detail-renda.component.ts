import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-detail-renda',
  	templateUrl: './detail-renda.component.html',
  	styleUrls: ['./detail-renda.component.scss']
})
export class DetailRendaComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
		$(document).ready(function(){
    		$('.datepicker').datepicker();
    	});
	}
	
	headerTable: string[] = ["Data", "Item", "Valor"];
	
	bodyMensal: string[][] = [
		['1/1/2017', 'Almoço', 'R$ 30,00'],
		['1/1/2017', 'Lanche', 'R$ 10,00'],
		['1/1/2017', 'Jantar', 'R$ 40,00'],
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

	public chartLabels: string[] = [
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro'
	];

	public chartData: any[] = [
		{data: [800, 940, 750, 800, 715, 800, 1000], label: 'Valor limite'},
		{data: [770, 800, 900, 660, 820, 780, 80], label: 'Valor gasto'}
	];

	/*
	public barChartType: string = 'horizontalBar';
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	
	public lineChartType: string = 'line';
	public lineChartOptions: any = {
        responsive: true
	};*/

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
