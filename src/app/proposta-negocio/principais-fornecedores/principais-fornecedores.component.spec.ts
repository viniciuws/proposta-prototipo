import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisFornecedoresComponent } from './principais-fornecedores.component';

describe('PrincipaisFornecedoresComponent', () => {
  let component: PrincipaisFornecedoresComponent;
  let fixture: ComponentFixture<PrincipaisFornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaisFornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
