import { Component, OnInit } from '@angular/core';
import {Modulos} from '../../shared/models/modulos';
import {Router} from "@angular/router";
import {ModulosService} from "../../shared/services/modulos.service";

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
    displayedColumns: string[] = ['id', 'nombre','acciones'];
    dataSource: Modulos[] = [];

    constructor(private router: Router, private modulosService: ModulosService) {
    }

    ngOnInit(): void {
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

    delete(modulo: Modulos) {
        this.modulosService.delete(modulo)
            .subscribe((response) => {
                if (response) {
                    this.findModulos();
                }
            }
        );
    }

}
