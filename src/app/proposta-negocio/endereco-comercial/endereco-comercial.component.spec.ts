import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoComercialComponent } from './endereco-comercial.component';

describe('EnderecoComercialComponent', () => {
  let component: EnderecoComercialComponent;
  let fixture: ComponentFixture<EnderecoComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
