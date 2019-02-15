import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss']
})
export class PropostaComponent implements OnInit {

  propostaForm: FormGroup;
  garantia: string;
  name = 'Garantias';
  isShow = false;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.propostaForm = this._formBuilder.group({
      operacao: ['', Validators.required],
      valorEmprestimo: ['', Validators.required],
      prazo: ['', Validators.required],
      parcelas: ['', Validators.required],
      periodicidade: ['', Validators.required],
      tipoGarantia: ['', Validators.required],
      duplicataValorOperacao: ['', Validators.required],
      duplicataSacado: ['', Validators.required],
      recebiveisValorOperacao: ['', Validators.required],
      recebiveisSacado: ['', Validators.required],
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalGarantiaComponent, {
      width: '250px',
      data: { name: this.name, garantia: this.garantia }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.garantia = result.value;
      this.propostaForm.controls['tipoGarantia'].setValue(this.garantia);
      this.garantia !== undefined ? this.isShow = true : this.isShow = false;
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
