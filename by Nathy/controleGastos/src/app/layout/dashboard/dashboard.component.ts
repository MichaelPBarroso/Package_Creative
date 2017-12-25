import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itensDiario: String[] = ["a", "a", "b"];
  itensMensal: String[] = ["a", "a", "b", "a", "a", "b", "a", "a", "b", "a", "a", "b"];

  constructor() { }

  ngOnInit() {
  }

}
