import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuarios} from "../../shared/models/usuarios";
import {UsuariosService} from "../../shared/services/usuarios.service";
import {ActivatedRoute} from "@angular/router";
import {RolesService} from "../../shared/services/roles.service";
import {Observable} from "rxjs";
import {Roles} from "../../shared/models/roles";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.scss']
})
export class UsuariosEditComponent implements OnInit { 
  password: string = "";
  hide = true;
  dataValidationForm: FormGroup = this.formBuilder.group({});
  isNew: boolean = true;
  rolObservable: Observable<Roles[]> = this.rolesService.list()
  .pipe(map((value => value.roles)));

  constructor(
    private usuariosService: UsuariosService,
    private rolesService: RolesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {    }

  ngOnInit(): void {
    this.buildForm();  }

  private buildForm(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      if (data?.id) {
        this.isNew = false;
      }

      this.dataValidationForm = this.formBuilder.group({
        id: [data.id],
        nombre: [data.nombre, [Validators.required]],
        idRol: [data.idRol, [Validators.required]],
        email: [data.email, [Validators.required, Validators.email]],
       });

       console.log(this.dataValidationForm.value.idRol)
    });
  }

  callOnSubmit() {
    let usuario = new Usuarios(
      this.dataValidationForm?.value.id,
      this.dataValidationForm?.value.nombre,
      this.dataValidationForm?.value.idRol,
      this.dataValidationForm?.value.email)

      if (this.isNew) {
        this.usuariosService.create(usuario)
          .subscribe(value => console.log(`Se creó el usuario: ${value}`));
      } else {
          this.usuariosService.edit(usuario)
          .subscribe(value => console.log(`Se modificó el usuario: ${value}`));
      }

      setTimeout(() => {
        window.history.back();
      }, 500)
    }

    compareRolesObjects(object1: Roles, object2: any) {
        return object1 && object2 && object1.id == object2._id;
    }

    navigateToUsuarios() {
      this.router.navigate(['usuarios']);
    }
}
