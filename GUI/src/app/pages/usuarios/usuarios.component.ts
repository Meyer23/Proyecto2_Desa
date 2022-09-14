import {Usuarios} from '../../shared/models/usuarios';
import { Component, OnInit, ViewChild } from '@angular/core';
import {UsuariosService} from "../../shared/services/usuarios.service";
import {Router} from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
    constructor(private router: Router, private usuariosService: UsuariosService ) {
    }
    usuarios: Usuarios[] = [];
    dataSource: any;
    displayedColumns: string[] = ['id', 'nombre', 'idRol', 'email', 'acciones'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Usuarios>(this.usuarios);
        this.dataSource.paginator = this.paginator;
        this.findUsuarios();
    }

    ngAfterViewInit() {      
        this.dataSource.sort = this.sort;
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

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }

}
