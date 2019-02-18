import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.scss']
})
export class GarantiasComponent implements OnInit {

  garantiaForm: FormGroup;
  garantia: string;
  veiculoForm: FormGroup;
  veiculo: {};
  name = 'Veículo';
  isShow = false;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.garantiaForm = this._formBuilder.group({
      tipoGarantia: ['', Validators.required],
      duplicataValorOperacao: ['', Validators.required],
      duplicataSacado: ['', Validators.required],
      recebiveisValorOperacao: ['', Validators.required],
      recebiveisSacado: ['', Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVeiculoComponent, {
      width: '1200px',
      data: { name: this.name, veiculo: this.veiculo }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.veiculo = result.value;
      this.garantiaForm.controls['tipoGarantia'].setValue('Veículo');
      this.veiculo !== undefined ? this.isShow = true : this.isShow = false;
    });
  }

}

export interface Garantia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-garantia',
  templateUrl: './modal-garantia/modal-garantia.component.html',
  styleUrls: ['./modal-garantia/modal-garantia.component.scss']
})
export class ModalGarantiaComponent {

  garantiaControl = new FormControl('', [Validators.required]);

  garantias: Garantia[] = [
    { value: 'garantia1', viewValue: 'Garantia 1' },
    { value: 'garantia2', viewValue: 'Garantia 2' },
    { value: 'garantia3', viewValue: 'Garantia 3' }
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalGarantiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface Veiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-veiculo',
  templateUrl: './modal-veiculo/modal-veiculo.component.html',
  styleUrls: ['./modal-veiculo/modal-veiculo.component.scss']
})
export class ModalVeiculoComponent implements OnInit {

  veiculoForm: FormGroup;

  veiculos: Veiculo[] = [
    { value: 'garantia1', viewValue: 'Garantia 1' },
    { value: 'garantia2', viewValue: 'Garantia 2' },
    { value: 'garantia3', viewValue: 'Garantia 3' }
  ];

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalVeiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
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
