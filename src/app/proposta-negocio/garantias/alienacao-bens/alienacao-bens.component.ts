import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alienacao-bens',
  templateUrl: './alienacao-bens.component.html',
  styleUrls: ['./alienacao-bens.component.scss']
})
export class AlienacaoBensComponent implements OnInit {

  alienacaoBensForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.alienacaoBensForm = this._formBuilder.group({
      tipoMaquina: ['', Validators.required],
      fabricante: ['', Validators.required],
      modelo: ['', Validators.required],
      versao: ['', Validators.required],
      anoFabricacao: ['', Validators.required],
      cotacao: ['', Validators.required],
      valorBem: ['', Validators.required],
      tipoBem: ['', Validators.required],
    });
  }

}
