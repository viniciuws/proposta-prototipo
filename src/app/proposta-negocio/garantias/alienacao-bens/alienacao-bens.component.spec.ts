import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienacaoBensComponent } from './alienacao-bens.component';

describe('AlienacaoBensComponent', () => {
  let component: AlienacaoBensComponent;
  let fixture: ComponentFixture<AlienacaoBensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienacaoBensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienacaoBensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
