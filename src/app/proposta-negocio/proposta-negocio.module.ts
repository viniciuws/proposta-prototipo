import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { PropostaNegocioComponent } from './proposta-negocio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QualificacaoEmpresaComponent } from './qualificacao-empresa/qualificacao-empresa.component';
import { EnderecoComercialComponent } from './endereco-comercial/endereco-comercial.component';
import { PropostaComponent, ModalGarantiaComponent } from './proposta/proposta.component';

@NgModule({
  declarations: [
    PropostaNegocioComponent,
    QualificacaoEmpresaComponent,
    EnderecoComercialComponent,
    PropostaComponent,
    ModalGarantiaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ModalGarantiaComponent
  ]
})
export class PropostaNegocioModule { }
