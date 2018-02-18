import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  	selector: 'app-form-categoria',
  	templateUrl: './form-categoria.component.html',
	styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent implements OnInit {

	//Este item deve vir de uma api sobre os tipos de conta
	coresCategoria: any[] = 
	[
  		{id:1, name: "Azul", cor: ""}, 
  		{id:2, name: "Amarelo", cor: ""}, 
  		{id:3, name: "Vermelho", cor: ""}, 
  		{id:4, name: "Verde", cor: ""}
	]

	//Este item deve vir de uma api sobre os tipos de conta
	iconesCategoria: any[] = 
	[
  		{id:1, name: "Money", icone: ""},
  		{id:2, name: "Cartão", icone: ""},
  		{id:3, name: "Carrinho", icone: ""}
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

}
