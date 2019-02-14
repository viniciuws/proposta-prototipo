import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { PropostaNegocioComponent } from './proposta-negocio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QualificacaoEmpresaComponent } from './qualificacao-empresa/qualificacao-empresa.component';
import { EnderecoComercialComponent } from './endereco-comercial/endereco-comercial.component';

@NgModule({
  declarations: [
    PropostaNegocioComponent,
    QualificacaoEmpresaComponent,
    EnderecoComercialComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PropostaNegocioModule { }
