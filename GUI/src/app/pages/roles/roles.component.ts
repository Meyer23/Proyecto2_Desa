import { Component, OnInit } from '@angular/core';
import {RolesService} from "../../shared/services/roles.service";
import {Router} from "@angular/router";
import {Roles} from "../../shared/models/roles";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  dataSource: Roles[] = [];

  constructor(private router: Router, private rolesService: RolesService) {    }

  ngOnInit(): void {
    this.findRoles();
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

  delete(rol: Roles) {
    this.rolesService.delete(rol)
      .subscribe((response) => {
        if (response) {
          this.findRoles();
        }
      }
    );
  }

}
