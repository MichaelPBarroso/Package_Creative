import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRendaComponent } from './detail-renda.component';

describe('DetailRendaComponent', () => {
  let component: DetailRendaComponent;
  let fixture: ComponentFixture<DetailRendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
