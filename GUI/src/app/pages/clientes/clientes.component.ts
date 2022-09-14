import { Component, OnInit, ViewChild } from '@angular/core';
import {Clientes} from '../../shared/models/clientes';
import {ClientesService} from "../../shared/services/clientes.service";
import {Router} from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router, private clientesService: ClientesService ) {
  }
  clientes: Clientes[] = [];
  dataSource: any;
  displayedColumns: string[] = ['clienteId', 'nombre', 'numeroCedula', 'ruc', 'correo', 'tipoPersona', 'telefono', 'direccion', 'saldo', 'acciones'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Clientes>(this.clientes);
    this.dataSource.paginator = this.paginator;
    this.findClientes();
  }

  ngAfterViewInit() {      
    this.dataSource.sort = this.sort;
  }
  
  findClientes() {
    this.clientesService.list()
      .subscribe(response => {
        this.dataSource = response.clientes;
      });
  }

  navigateToEditCliente(clienteId: string) {
    this.router.navigate(['/clientes/', clienteId, 'edit']);
  }

  navigateToCreateCliente() {
    this.router.navigate(['/clientes/create']);
  }

  delete(element: Clientes) {
    this.clientesService.delete(element).subscribe(value => {
      if (value) {
        this.findClientes();
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
