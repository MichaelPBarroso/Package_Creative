import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  bodyDiario: string[][] = [
    ['1/1/2017', 'Almoço', 'R$ 30,00'],
    ['1/1/2017', 'Lanche', 'R$ 10,00'],
    ['1/1/2017', 'Jantar', 'R$ 40,00']
  ]


  constructor() { }

  ngOnInit() {
  }

}
