import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  	selector: 'app-form-renda',
  	templateUrl: './form-renda.component.html',
  	styleUrls: ['./form-renda.component.scss']
})
export class FormRendaComponent implements OnInit {

	tipoRenda: any[] = [{id:1, name: "Cartão crédito"}, {id:2, name:"Conta bancaria"}, {id:3, name:"Vale refeição"}, {id:4, name:"Vale Alimentação"}]

  	tipoRendaAtual: number;

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
	    $(document).ready(function(){
      		$('select').select();
    	});
  	}
}
