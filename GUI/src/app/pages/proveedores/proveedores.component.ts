import { Component, OnInit, ViewChild } from '@angular/core';
import {Proveedores} from '../../shared/models/proveedores';
import {ProveedoresService} from "../../shared/services/proveedores.service";
import {Router} from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  constructor(private router: Router, private proveedoresService: ProveedoresService ) {
  }
  proveedores: Proveedores[] = [];
  dataSource: any;
  displayedColumns: string[] = ['proveedorId', 'nombre', 'numeroCedula', 'ruc', 'telefono', 'email', 'direccion', 'saldo', 'acciones'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Proveedores>(this.proveedores);
    this.dataSource.paginator = this.paginator;
    this.findProveedores();
  }

  ngAfterViewInit() {      
    this.dataSource.sort = this.sort;
  }
  
  findProveedores() {
    this.proveedoresService.list()
      .subscribe(response => {
        this.dataSource = response.proveedores;
      });
  }

  navigateToEditProveedor(proveedorId: string) {
    this.router.navigate(['/proveedores/', proveedorId, 'edit']);
  }

  navigateToCreateProveedor() {
    this.router.navigate(['/proveedores/create']);
  }

  delete(element: Proveedores){
    Swal.fire({
      title: 'Está seguro que desea eliminar?',
      text: 'No podrás recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.proveedoresService.delete(element).subscribe(value => {
          if (value) {
            this.findProveedores();
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
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
