import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificacaoEmpresaComponent } from './qualificacao-empresa.component';

describe('QualificacaoEmpresaComponent', () => {
  let component: QualificacaoEmpresaComponent;
  let fixture: ComponentFixture<QualificacaoEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificacaoEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificacaoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
