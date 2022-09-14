import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Proveedores} from "../../shared/models/proveedores";
import {ProveedoresService} from "../../shared/services/proveedores.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.scss']
})
export class ProveedoresEditComponent implements OnInit {
  dataValidationForm: FormGroup = this.formBuilder.group({});
  isNew: boolean = true;

  constructor(
    private proveedorService: ProveedoresService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {    }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      if (data?.proveedorId) {
        this.isNew = false;
      }

      this.dataValidationForm = this.formBuilder.group({
        proveedorId: [data.proveedorId],
        numeroCedula: [data.numeroCedula, [Validators.required]],
        ruc: [data.ruc],      
        telefono: [data.telefono, [Validators.required]],   
        email: [data.email, [Validators.required, Validators.email]],
        direccion: [data.direccion, [Validators.required]],       
        saldo: [data.saldo]
        });
      });
  }

  callOnSubmit() {
    let proveedor = new Proveedores(
      this.dataValidationForm?.value.proveedorId,
      this.dataValidationForm?.value.numeroCedula,
      this.dataValidationForm?.value.ruc,
      this.dataValidationForm?.value.telefono,
      this.dataValidationForm?.value.email,
      this.dataValidationForm?.value.direccion
      
    )

    if (this.isNew) {
      this.proveedorService.create(proveedor)
        .subscribe(value => console.log(`Se creó el proveedor: ${value}`));
    } else {
      this.proveedorService.edit(proveedor)
        .subscribe(value => console.log(`Se modificó el proveedor: ${value}`));
    }

    setTimeout(() => {
      window.history.back()
    }, 500);
  }

  navigateToProveedores() {
    this.router.navigate(['proveedores']);
  }

}
