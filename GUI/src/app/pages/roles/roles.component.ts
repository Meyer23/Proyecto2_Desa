import { Component, OnInit, ViewChild } from '@angular/core';
import {RolesService} from "../../shared/services/roles.service";
import {Router} from "@angular/router";
import {Roles} from "../../shared/models/roles";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  constructor(private router: Router, private rolesService: RolesService) {    }
  roles: Roles[] = [];
  dataSource: any;
  displayedColumns: string[] = ['id', 'nombreRol', 'acciones'];
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Roles>(this.roles);
    this.dataSource.paginator = this.paginator;
    this.findRoles();
  }

  ngAfterViewInit() {      
    this.dataSource.sort = this.sort;
  }

  findRoles() {
    this.rolesService.list()
      .subscribe(response => {
        this.dataSource = response.roles;
      });
  }

  navigateToEditRol(id: string) {
    this.router.navigate(['/roles/', id, 'edit']);
  }

  navigateToCreateRol() {
    this.router.navigate(['/roles/create']);
  }

  delete(rol: Roles){
    Swal.fire({
      title: 'Está seguro que desea eliminar?',
      text: 'No podrás recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.rolesService.delete(rol)
      .subscribe((response) => {
        if (response) {
          this.findRoles();
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
