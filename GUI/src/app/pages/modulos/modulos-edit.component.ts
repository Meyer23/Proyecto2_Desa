import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Modulos} from "../../shared/models/modulos";
import {ModulosService} from "../../shared/services/modulos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modulos-edit',
  templateUrl: './modulos-edit.component.html',
  styleUrls: ['./modulos-edit.component.scss']
})
export class ModulosEditComponent implements OnInit {
    dataValidationForm: FormGroup = this.formBuilder.group({});
    isNew: boolean = true;

    constructor(
        private moduloService: ModulosService,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute
    ) {    }

    ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.activatedRoute.data.subscribe(({data}) => {
            if (data?.id) {
                this.isNew = false;
            }

            this.dataValidationForm = this.formBuilder.group({
              id: [data.id],
              nombre: [data.nombre, [Validators.required]]               
            });
        });
    }

    callOnSubmit() {
        let modulo = new Modulos(
          this.dataValidationForm?.value.id,
          this.dataValidationForm?.value.nombre
        )

        if (this.isNew) {
            this.moduloService.create(modulo)
                .subscribe(value => console.log(`Se creó el módulo: ${value}`));
        } else {
            this.moduloService.edit(modulo)
                .subscribe(value => console.log(`Se modificó el módulo: ${value}`));
        }

        setTimeout(() => {
            window.history.back()
        }, 500);
    }

}
