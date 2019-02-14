import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaNegocioComponent } from './proposta-negocio.component';

describe('PropostaNegocioComponent', () => {
  let component: PropostaNegocioComponent;
  let fixture: ComponentFixture<PropostaNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
