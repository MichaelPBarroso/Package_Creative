import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ContaComponent } from '../conta.component';
declare var $:any;

@Component({
  	selector: 'form-conta',
  	templateUrl: './form-conta.component.html',
  	styleUrls: ['./form-conta.component.scss']
})
export class FormContaComponent implements OnInit {

	@Input() adicionarLista : boolean = false;
	@Output() lista = new EventEmitter();
	
	conta : ContaComponent = new ContaComponent();

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
	  
	salvar(){
		console.log("salvo!");
		console.log(this.conta);

		if(this.adicionarLista){
			this.lista.emit(this.conta);
			return;
		}

		//Adiciona ao banco de dados
	}
}
