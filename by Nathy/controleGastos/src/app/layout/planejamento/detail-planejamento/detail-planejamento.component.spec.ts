import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanejamentoComponent } from './detail-planejamento.component';

describe('DetailPlanejamentoComponent', () => {
  let component: DetailPlanejamentoComponent;
  let fixture: ComponentFixture<DetailPlanejamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlanejamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
