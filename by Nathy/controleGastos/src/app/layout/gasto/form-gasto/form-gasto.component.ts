import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-form-gasto',
  templateUrl: './form-gasto.component.html',
  styleUrls: ['./form-gasto.component.scss']
})
export class FormGastoComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
	    $(document).ready(function(){
        	$('select').select();
    	});
  	}

  	rendaCadastrada : any[] = 
  	[
		{id: 1, name: "Cartão 1"},
		{id: 2, name: "Cartão 2"},
		{id: 3, name: "Vale Refeição"},
		{id: 4, name: "Cartão debito"}
  	]
}
