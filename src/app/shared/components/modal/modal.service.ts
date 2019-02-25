import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalAlertaComponent } from './templates/modal-alerta.component';
import { ConfigModal } from './config-modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  config = new ConfigModal();

  constructor(public dialog: MatDialog) {}

  alertar(titulo: string, texto: string, icone = 'warning', nomeBotaoConfirmar = 'Ok', nomeBotaoCancelar = '') {

    this.config.titulo = titulo;
    this.config.texto = texto;
    this.config.icone = icone;
    this.config.nomeBotaoConfirmar = nomeBotaoConfirmar;
    this.config.nomeBotaoCancelar = nomeBotaoCancelar;

    this.dialog.open(ModalAlertaComponent, {
      minWidth: '250px',
      data: this.config
    });
  }

  confirmar(
    titulo: string,
    texto: string,
    nomeBotaoConfirmar = 'Confirmar',
    nomeBotaoCancelar = 'Voltar',
    icone = 'warning',
    retorno: Function
  ) {
    this.config.titulo = titulo;
    this.config.texto = texto;
    this.config.nomeBotaoConfirmar = nomeBotaoConfirmar;
    this.config.nomeBotaoCancelar = nomeBotaoCancelar;
    this.config.icone = icone;

    const dialogRef = this.dialog.open(ModalAlertaComponent, {
      minWidth: '250px',
      data: this.config,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      retorno(result);
    });
  }
}
