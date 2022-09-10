import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {ClientesComponent} from './clientes.component';
import {ClientesEditComponent} from "./clientes-edit.component";
import {Clientes} from "../../shared/models/clientes";
import {ClientesService} from "../../shared/services/clientes.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})

export class ClientesResolve implements Resolve<Clientes> {
    
    constructor(private service: ClientesService) {   }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Clientes> {
        const id = route.params['clienteId'] ? route.params['clienteId'] : null;
        if (id) {
            return this.service.find(id);
        }
        return of(new Clientes());
    }
}

const routes: Routes = [
    {
        path: '',
        component: ClientesComponent
    }
    ,
    {
        path: ':clienteId/edit',
        component: ClientesEditComponent,
        resolve: {
            data: ClientesResolve
        }
    }
    ,
    {
        path: 'create',
        component: ClientesEditComponent,
        resolve: {
            data: ClientesResolve
        }
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {
}