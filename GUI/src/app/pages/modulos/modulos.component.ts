import { Component, OnInit, ViewChild } from '@angular/core';
import {Modulos} from '../../shared/models/modulos';
import {Router} from "@angular/router";
import {ModulosService} from "../../shared/services/modulos.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
    constructor(private router: Router, private modulosService: ModulosService) {
    }
    modulos: Modulos[] = [];
    dataSource: any;
    displayedColumns: string[] = ['id', 'nombre','acciones'];
    
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Modulos>(this.modulos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.findModulos();
    }

    findModulos() {
        this.modulosService.list()
            .subscribe(response => {
                this.dataSource = response.modulos;
            }
        );
    }

    navigateToEditModulo(id: string) {
        this.router.navigate(['/modulos/', id, 'edit']);
    }

    navigateToCreateModulo() {
        this.router.navigate(['/modulos/create']);
    }

    delete(modulo: Modulos){
        Swal.fire({
          title: 'Está seguro que desea eliminar?',
          text: 'No podrás recuperar este registro!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            this.modulosService.delete(modulo)
            .subscribe((response) => {
                if (response) {
                    this.findModulos();
                }
            });
            Swal.fire(
              'Eliminado'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado'
            )
          }
        })
      }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toUpperCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }

}
