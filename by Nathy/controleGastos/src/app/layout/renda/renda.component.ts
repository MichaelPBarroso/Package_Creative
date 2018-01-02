import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renda',
  templateUrl: './renda.component.html',
  styleUrls: ['./renda.component.scss']
})
export class RendaComponent implements OnInit {

  	rendaCadastrada : any[] = 
  	[
		{id: 1, name: "Cartão 1"},
		{id: 2, name: "Cartão 2"},
		{id: 3, name: "Vale Refeição"},
		{id: 4, name: "Cartão debito"}
  	]

  constructor() { }

  ngOnInit() {
  }

}
