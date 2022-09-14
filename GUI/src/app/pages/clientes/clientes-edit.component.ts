import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Clientes} from "../../shared/models/clientes";
import {ClientesService} from "../../shared/services/clientes.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.scss']
})
export class ClientesEditComponent implements OnInit {
  dataValidationForm: FormGroup = this.formBuilder.group({});
  isNew: boolean = true;

  constructor(
    private clienteService: ClientesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {    }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      if (data?.clienteId) {
        this.isNew = false;
      }

      this.dataValidationForm = this.formBuilder.group({
        clienteId: [data.clienteId],
        nombre: [data.nombre, [Validators.required]],
        numeroCedula: [data.numeroCedula, [Validators.required]],
        ruc: [data.ruc],         
        correo: [data.correo, [Validators.required, Validators.email]],
        tipoPersona: [data.tipoPersona, [Validators.required]],
        telefono: [data.telefono, [Validators.required]],
        direccion: [data.direccion, [Validators.required]]
        });
      });
  }

  callOnSubmit() {
    let cliente = new Clientes(
      this.dataValidationForm?.value.clienteId,
      this.dataValidationForm?.value.nombre,
      this.dataValidationForm?.value.numeroCedula,
      this.dataValidationForm?.value.ruc,
      this.dataValidationForm?.value.correo,
      this.dataValidationForm?.value.tipoPersona,
      this.dataValidationForm?.value.telefono,
      this.dataValidationForm?.value.direccion
    )

    if (this.isNew) {
      this.clienteService.create(cliente)
        .subscribe(value => console.log(`Se creó el cliente: ${value}`));
    } else {
      this.clienteService.edit(cliente)
        .subscribe(value => console.log(`Se modificó el cliente: ${value}`));
    }

    setTimeout(() => {
      window.history.back()
    }, 500);
  }

  navigateToClientes() {
    this.router.navigate(['clientes']);
  }


}
