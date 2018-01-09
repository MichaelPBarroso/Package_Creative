import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContaComponent } from './detail-conta.component';

describe('DetailContaComponent', () => {
  let component: DetailContaComponent;
  let fixture: ComponentFixture<DetailContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
