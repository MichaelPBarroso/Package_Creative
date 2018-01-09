import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlanejamentoComponent } from './form-planejamento.component';

describe('FormPlanejamentoComponent', () => {
  let component: FormPlanejamentoComponent;
  let fixture: ComponentFixture<FormPlanejamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlanejamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
