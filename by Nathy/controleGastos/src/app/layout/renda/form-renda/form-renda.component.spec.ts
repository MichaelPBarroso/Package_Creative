import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendaComponent } from './form-renda.component';

describe('FormRendaComponent', () => {
  let component: FormRendaComponent;
  let fixture: ComponentFixture<FormRendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
