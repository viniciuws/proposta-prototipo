import { ModalService } from './../../shared/components/modal/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeia-societaria',
  templateUrl: './cadeia-societaria.component.html',
  styleUrls: ['./cadeia-societaria.component.scss']
})
export class CadeiaSocietariaComponent implements OnInit {

  cadeiaSocietariaForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService) { }

  ngOnInit() {
    this.cadeiaSocietariaForm = this.formBuilder.group({
      razaoSocialNome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      percenParticipacao: ['', Validators.required],
      pep: ['', Validators.required],
      fatca: ['', Validators.required]
    });
  }

  openModal() {
    this.modalService.alertar('Alerta', 'TEXTO');
  }

}
