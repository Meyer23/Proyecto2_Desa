import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RolesService} from "../../shared/services/roles.service";
import {Roles} from "../../shared/models/roles";
import {ModulosService} from "../../shared/services/modulos.service";
import {Modulos} from "../../shared/models/modulos";

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})

export class RolesEditComponent implements OnInit {
  dataValidationForm: FormGroup = this.formBuilder.group({});
  availableModulos: Modulos[] = [];
  isNew: boolean = true;

  constructor(private rolesService: RolesService,
    private modulosService: ModulosService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.findAvailableModulos();
  }

  private buildForm(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      if (data?.id) {
        this.isNew = false;
      }
  
      this.dataValidationForm = this.formBuilder.group({
        id: [data?.id],
        nombre: [data?.nombre, [Validators.required]],
        modulos: [data?.modulos, [Validators.required]]
      });
    });
  }

  private findAvailableModulos() {
    this.modulosService.list().subscribe(value => {
      this.availableModulos = value.modulos;
    })
  }

  callOnSubmit() {
    const selectedModulos: Modulos[] = this.dataValidationForm?.value.modulos;
    let selectedModulosIdentifiers = selectedModulos.map(value => value.id);

    let rol = new Roles(
      this.dataValidationForm?.value.id,
      this.dataValidationForm?.value.nombre,
      selectedModulosIdentifiers,
    )

    if (this.isNew) {
      this.rolesService.create(rol)
        .subscribe(value => console.log(`Se creó el rol: ${value}`));
      } else {
          this.rolesService.edit(rol)
            .subscribe(value => console.log(`Se modificó el rol: ${value}`));
      }

      setTimeout(() => {
        window.history.back()
      }, 500);
    }

    compareModulosObjects(object1: Modulos, object2: any) {
        return object1 && object2 && object1.id == object2;
    }

}
