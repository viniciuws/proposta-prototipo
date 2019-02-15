import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principais-produtos',
  templateUrl: './principais-produtos.component.html',
  styleUrls: ['./principais-produtos.component.scss']
})
export class PrincipaisProdutosComponent implements OnInit {

  principaisProdutosForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.principaisProdutosForm = this._formBuilder.group({
      nomeProduto: ['', Validators.required],
      partFaturamento: ['', Validators.required]
    });
  }

}
