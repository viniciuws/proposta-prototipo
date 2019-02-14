import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-comercial',
  templateUrl: './endereco-comercial.component.html',
  styleUrls: ['./endereco-comercial.component.scss']
})
export class EnderecoComercialComponent implements OnInit {

  enderecoComercialForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enderecoComercialForm = this._formBuilder.group({
      tipoLogradouro: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required],
      ddd: ['', Validators.required],
      telefoneComercial: ['', Validators.required],
    });
  }

}
