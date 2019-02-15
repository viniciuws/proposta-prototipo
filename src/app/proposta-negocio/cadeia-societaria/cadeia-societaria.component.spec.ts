import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeiaSocietariaComponent } from './cadeia-societaria.component';

describe('CadeiaSocietariaComponent', () => {
  let component: CadeiaSocietariaComponent;
  let fixture: ComponentFixture<CadeiaSocietariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadeiaSocietariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeiaSocietariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
