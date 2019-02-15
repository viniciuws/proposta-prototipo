import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principais-clientes',
  templateUrl: './principais-clientes.component.html',
  styleUrls: ['./principais-clientes.component.scss']
})
export class PrincipaisClientesComponent implements OnInit {

  principaisClientesForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.principaisClientesForm = this._formBuilder.group({
      nomeCliente: ['', Validators.required],
      partFaturamento: ['', Validators.required]
    });
  }

}
