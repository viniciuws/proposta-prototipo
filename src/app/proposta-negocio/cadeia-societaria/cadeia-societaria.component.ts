import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeia-societaria',
  templateUrl: './cadeia-societaria.component.html',
  styleUrls: ['./cadeia-societaria.component.scss']
})
export class CadeiaSocietariaComponent implements OnInit {

  cadeiaSocietariaForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadeiaSocietariaForm = this._formBuilder.group({
      razaoSocialNome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      percenParticipacao: ['', Validators.required],
      pep: ['', Validators.required],
      fatca: ['', Validators.required]
    });
  }

}
