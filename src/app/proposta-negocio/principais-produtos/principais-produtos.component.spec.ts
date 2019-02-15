import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisProdutosComponent } from './principais-produtos.component';

describe('PrincipaisProdutosComponent', () => {
  let component: PrincipaisProdutosComponent;
  let fixture: ComponentFixture<PrincipaisProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaisProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
