import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'card-basic',
  	templateUrl: './card-basic.component.html',
  	styleUrls: ['./card-basic.component.scss']
})
export class CardBasicComponent implements OnInit {

  	@Input() titleCard: string = "";
  	@Input() icone : string = "";
	@Input() nameLinkCard : string = "";
  	@Input() routerLinkCard : any[] = ['/'];

  	constructor() { }

  	ngOnInit() {
  	}

}
