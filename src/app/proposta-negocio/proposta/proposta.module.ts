import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { ModalGarantiaComponent, PropostaComponent } from './proposta.component';

@NgModule({
  declarations: [
    PropostaComponent,
    ModalGarantiaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    PropostaComponent
  ],
  entryComponents: [
    ModalGarantiaComponent
  ]
})
export class PropostaModule { }
