import {Usuarios} from '../../shared/models/usuarios';
import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../shared/services/usuarios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'idRol', 'email'];
    dataSource: Usuarios[] = [];

    constructor(private router: Router, private userService: UsuariosService) {
    }

    ngOnInit(): void {
        this.findUsers();
    }

    findUsers() {
        this.userService.list()
            .subscribe(response => {
                this.dataSource = response.usuarios;
            });
    }

    navigateToEditUser(uid: string) {
        this.router.navigate(['/usuarios/', uid, 'edit']);
    }

    navigateToCreateUser() {
        this.router.navigate(['/usuarios/create']);
    }

    delete(element: Usuarios) {
        this.userService.delete(element).subscribe(value => {
            if (value) {
                this.findUsers();
            }
        });
    }

}
