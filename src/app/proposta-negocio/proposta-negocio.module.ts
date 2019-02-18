import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { PropostaNegocioComponent } from './proposta-negocio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QualificacaoEmpresaComponent } from './qualificacao-empresa/qualificacao-empresa.component';
import { EnderecoComercialComponent } from './endereco-comercial/endereco-comercial.component';
import { PropostaComponent, ModalGarantiaComponent } from './proposta/proposta.component';
import { CadeiaSocietariaComponent } from './cadeia-societaria/cadeia-societaria.component';
import { PrincipaisClientesComponent } from './principais-clientes/principais-clientes.component';
import { PrincipaisFornecedoresComponent } from './principais-fornecedores/principais-fornecedores.component';
import { PrincipaisProdutosComponent } from './principais-produtos/principais-produtos.component';
import { VeiculoComponent } from './proposta/veiculo/veiculo.component';
import { AlienacaoBensComponent } from './proposta/alienacao-bens/alienacao-bens.component';

@NgModule({
  declarations: [
    PropostaNegocioComponent,
    QualificacaoEmpresaComponent,
    EnderecoComercialComponent,
    PropostaComponent,
    ModalGarantiaComponent,
    CadeiaSocietariaComponent,
    PrincipaisClientesComponent,
    PrincipaisFornecedoresComponent,
    PrincipaisProdutosComponent,
    VeiculoComponent,
    AlienacaoBensComponent
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
