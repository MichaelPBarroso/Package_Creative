import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  	selector: 'app-form-conta',
  	templateUrl: './form-conta.component.html',
  	styleUrls: ['./form-conta.component.scss']
})
export class FormContaComponent implements OnInit {

	//Este item deve vir de uma api sobre os tipos de conta
	tipoConta: any[] = 
	[
		{id:1, name: "Cartão crédito"}, 
		{id:2, name: "Conta bancaria"}, 
		{id:3, name: "Vale refeição"}, 
		{id:4, name: "Vale Alimentação"}
	]

  	tipoContaAtual: number;

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
	    $(document).ready(function(){
      		$('select').select();
    	});
  	}
}
