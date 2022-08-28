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
    displayedColumns: string[] = ['id', 'nombre', 'idRol', 'email','acciones'];
    dataSource: Usuarios[] = [];

    constructor(private router: Router, private usuariosService: UsuariosService) {
    }

    ngOnInit(): void {
        this.findUsuarios();
    }

    findUsuarios() {
        this.usuariosService.list()
            .subscribe(response => {
                this.dataSource = response.usuarios;
            });
    }

    navigateToEditUsuario(id: string) {
        this.router.navigate(['/usuarios/', id, 'edit']);
    }

    navigateToCreateUsuario() {
        this.router.navigate(['/usuarios/create']);
    }

    delete(element: Usuarios) {
        this.usuariosService.delete(element).subscribe(value => {
            if (value) {
                this.findUsuarios();
            }
        });
    }

}
