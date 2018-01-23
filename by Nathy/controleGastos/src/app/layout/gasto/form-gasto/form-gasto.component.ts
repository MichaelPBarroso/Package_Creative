import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { GastoComponent } from '../gasto.component';
declare var $:any;

@Component({
  selector: 'form-gasto',
  templateUrl: './form-gasto.component.html',
  styleUrls: ['./form-gasto.component.scss']
})
export class FormGastoComponent implements OnInit {

	@Input() adicionarLista : boolean = false;
	@Output() lista = new EventEmitter();
	
	gasto : GastoComponent = new GastoComponent();

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
	    $(document).ready(function(){
			$('select').select();
			$('.datepicker').datepicker();
    	});
  	}

  	contaCadastrada : any[] = 
  	[
		{id: 1, name: "Cartão 1"},
		{id: 2, name: "Cartão 2"},
		{id: 3, name: "Vale Refeição"},
		{id: 4, name: "Cartão debito"}
	]
	
	salvar(){
		console.log("salvo!");
		//Esta trazendo a lista dos item.
		delete this.gasto.gastoCadastrada;

		if(this.adicionarLista){
			this.lista.emit(this.gasto);
			return;
		}

		//Adiciona ao banco de dados
	}
}
