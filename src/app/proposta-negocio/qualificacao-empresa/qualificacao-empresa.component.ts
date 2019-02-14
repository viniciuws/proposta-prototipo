import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualificacao-empresa',
  templateUrl: './qualificacao-empresa.component.html',
  styleUrls: ['./qualificacao-empresa.component.scss']
})
export class QualificacaoEmpresaComponent implements OnInit {

  qualificacaoEmpresaForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.qualificacaoEmpresaForm = this._formBuilder.group({
      razaoSocial: ['', Validators.required],
      ramoAtividade: ['', Validators.required],
      dataConstituicao: ['', Validators.required],
      naturezaJuridica: ['', Validators.required],
      cnpj: ['', Validators.required],
      faturamento: ['', Validators.required],
      patrimonioLiquido: ['', Validators.required],
      quantidadeFuncionarios: ['', Validators.required],
      cnae: ['', Validators.required],
      administradores: ['', Validators.required],
    });
  }

}
