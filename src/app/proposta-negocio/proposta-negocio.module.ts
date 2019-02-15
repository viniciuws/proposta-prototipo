import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { PropostaNegocioComponent } from './proposta-negocio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QualificacaoEmpresaComponent } from './qualificacao-empresa/qualificacao-empresa.component';
import { EnderecoComercialComponent } from './endereco-comercial/endereco-comercial.component';
import { CadeiaSocietariaComponent } from './cadeia-societaria/cadeia-societaria.component';
import { PrincipaisClientesComponent } from './principais-clientes/principais-clientes.component';
import { PrincipaisFornecedoresComponent } from './principais-fornecedores/principais-fornecedores.component';
import { PrincipaisProdutosComponent } from './principais-produtos/principais-produtos.component';

@NgModule({
  declarations: [
    PropostaNegocioComponent,
    QualificacaoEmpresaComponent,
    EnderecoComercialComponent,
    CadeiaSocietariaComponent,
    PrincipaisClientesComponent,
    PrincipaisFornecedoresComponent,
    PrincipaisProdutosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PropostaNegocioModule { }
