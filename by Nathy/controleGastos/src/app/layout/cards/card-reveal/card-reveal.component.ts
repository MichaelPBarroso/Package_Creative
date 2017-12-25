import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card-reveal',
  templateUrl: './card-reveal.component.html',
  styleUrls: ['./card-reveal.component.scss']
})
export class CardRevealComponent implements OnInit {

  @Input() titleCard : string = "";
  @Input() textCard : any;
  @Input() titleSubCard : string = "Detalhes";
  @Input() itensDetalhe : string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
