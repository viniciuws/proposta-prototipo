import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../shared/components/modal/modal.module';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { CadeiaSocietariaComponent } from './cadeia-societaria/cadeia-societaria.component';
import { EnderecoComercialComponent } from './endereco-comercial/endereco-comercial.component';
import { GarantiasModule } from './garantias/garantias.module';
import { PrincipaisClientesComponent } from './principais-clientes/principais-clientes.component';
import { PrincipaisFornecedoresComponent } from './principais-fornecedores/principais-fornecedores.component';
import { PrincipaisProdutosComponent } from './principais-produtos/principais-produtos.component';
import { PropostaNegocioComponent } from './proposta-negocio.component';
import { PropostaModule } from './proposta/proposta.module';
import { QualificacaoEmpresaComponent } from './qualificacao-empresa/qualificacao-empresa.component';

@NgModule({
  declarations: [
    PropostaNegocioComponent,
    QualificacaoEmpresaComponent,
    EnderecoComercialComponent,
    CadeiaSocietariaComponent,
    PrincipaisClientesComponent,
    PrincipaisFornecedoresComponent,
    PrincipaisProdutosComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PropostaModule,
    GarantiasModule,
    ModalModule
  ],
})
export class PropostaNegocioModule { }
