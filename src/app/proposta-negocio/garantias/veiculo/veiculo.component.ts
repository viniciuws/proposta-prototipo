import { MatDialog } from '@angular/material';
import { ModalVeiculoComponent } from './../garantias.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Veiculo } from './veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  @Input() veiculo: Veiculo;
  veiculoForm: FormGroup;
  name = 'Veículo';

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.veiculoForm = this._formBuilder.group({
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      anoModelo: ['', Validators.required],
      modelo: ['', Validators.required],
      versao: ['', Validators.required],
      anoFabricacao: ['', Validators.required],
      cotacao: ['', Validators.required],
      valorDoBem: ['', Validators.required],
      quitado: ['', Validators.required],
      renavam: ['', Validators.required],
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      cor: ['', Validators.required],
      combustivel: ['', Validators.required],
      despersasDespachante: ['', Validators.required],
      despesasMulta: ['', Validators.required],
      despesasIpva: ['', Validators.required],
      despesasLicenciamento: ['', Validators.required],
      ufLicenciamento: ['', Validators.required],
      vendedor: ['', Validators.required],
      cpfVendedor: ['', Validators.required],
      tipoDoBem: ['', Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVeiculoComponent, {
      width: '1200px',
      data: { name: this.name, veiculo: this.veiculo }
    });
  }

}
