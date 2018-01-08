import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

	categoriaCadastrada : any[] = 
	[
		{id: 1, name: "Roupas"},
		{id: 2, name: "Comida"},
		{id: 3, name: "Transporte"},
		{id: 4, name: "Entretenimento"}
	]
  
  constructor() { }

  ngOnInit() {
  }

}