import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfigModal } from '../config-modal';

@Component({
  selector: 'app-modal-alerta',
  templateUrl: './modal-alerta.component.html',
})
export class ModalAlertaComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalAlertaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ConfigModal
  ) {}

  obterTitulo = () => this.data.titulo;
  obterTexto = () => this.data.texto;
  obterIcone = () => this.data.icone;
  obternomeBotaoConfirmar = () => this.data.nomeBotaoConfirmar;
  mostrarBotaoCancelar = () => this.data.nomeBotaoCancelar;
  obternomeBotaoCancelar = () => this.data.nomeBotaoCancelar;

}
