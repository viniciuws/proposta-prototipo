import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principais-fornecedores',
  templateUrl: './principais-fornecedores.component.html',
  styleUrls: ['./principais-fornecedores.component.scss']
})
export class PrincipaisFornecedoresComponent implements OnInit {

  principaisFornecedoresForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.principaisFornecedoresForm = this._formBuilder.group({
      nomeFornecedor: ['', Validators.required],
      partCompras: ['', Validators.required]
    });
  }

}
