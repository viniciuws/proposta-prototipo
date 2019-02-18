import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposta-negocio',
  templateUrl: './proposta-negocio.component.html',
  styleUrls: ['./proposta-negocio.component.scss']
})
export class PropostaNegocioComponent implements OnInit {

  passo = 1;

  constructor() { }

  ngOnInit() {}

  goToStep(step): void {
    this.passo = step;
  }

}
