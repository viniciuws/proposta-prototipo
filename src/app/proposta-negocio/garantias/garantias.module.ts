import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlienacaoBensComponent } from './alienacao-bens/alienacao-bens.component';
import { ModalGarantiaComponent, ModalVeiculoComponent, GarantiasComponent } from './garantias.component';
import { VeiculoComponent } from './veiculo/veiculo.component';

@NgModule({
  declarations: [
    VeiculoComponent,
    AlienacaoBensComponent,
    GarantiasComponent,
    ModalGarantiaComponent,
    ModalVeiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    GarantiasComponent
  ],
  entryComponents: [
    ModalGarantiaComponent,
    ModalVeiculoComponent
  ]
})
export class GarantiasModule { }
