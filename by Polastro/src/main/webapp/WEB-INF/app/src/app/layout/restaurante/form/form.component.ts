import { Component, OnInit } from '@angular/core';
import { RestauranteComponent } from '../restaurante.component';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  restaurante: RestauranteComponent;

  constructor() { 
    this.restaurante = new RestauranteComponent()
  }

  ngOnInit() {
  }

  cadastrar(event){
    
    event.preventDefault();

    console.log(this.restaurante);
  }

}
