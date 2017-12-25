import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRevealComponent } from './card-reveal.component';

describe('CardRevealComponent', () => {
  let component: CardRevealComponent;
  let fixture: ComponentFixture<CardRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
