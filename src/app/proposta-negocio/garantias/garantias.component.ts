import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Veiculo } from './veiculo/veiculo';

export interface TipoGarantia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.scss']
})
export class GarantiasComponent implements OnInit {

  tipoGarantias: TipoGarantia[] = [
    // { value: 'alienacaoBens', viewValue: 'Alienação de Bens' },
    // { value: 'duplicata', viewValue: 'Duplicata' },
    // { value: 'recebiveis', viewValue: 'Recebíveis' },
    { value: 'veiculo', viewValue: 'Veículo' }
  ];

  garantiaForm: FormGroup;
  garantia: string;
  veiculoForm: FormGroup;
  veiculo: Veiculo;
  name = 'Veículo';
  isShow = false;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.garantiaForm = this._formBuilder.group({
      tipoGarantia: ['', Validators.required]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVeiculoComponent, {
      width: '1200px',
      data: { name: this.name, veiculo: this.veiculo }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.veiculo = result.value;
      this.veiculo !== undefined ? this.isShow = true : this.isShow = false;
    });
  }

}

@Component({
  selector: 'app-modal-veiculo',
  templateUrl: './modal-veiculo/modal-veiculo.component.html',
  styleUrls: ['./modal-veiculo/modal-veiculo.component.scss']
})
export class ModalVeiculoComponent implements OnInit {

  veiculoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalVeiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Veiculo
  ) { }

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

  onNoClick(): void {
    this.dialogRef.close();
  }

}
