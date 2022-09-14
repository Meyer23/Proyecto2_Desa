import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {ProveedoresComponent} from './proveedores.component';
import {ProveedoresEditComponent} from "./proveedores-edit.component";
import {Proveedores} from "../../shared/models/proveedores";
import {ProveedoresService} from "../../shared/services/proveedores.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})

export class ProveedoresResolve implements Resolve<Proveedores> {
    
    constructor(private service: ProveedoresService) {   }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Proveedores> {
        const id = route.params['proveedorId'] ? route.params['proveedorId'] : null;
        if (id) {
            return this.service.find(id);
        }
        return of(new Proveedores());
    }
}

const routes: Routes = [
    {
        path: '',
        component: ProveedoresComponent
    }
    ,
    {
        path: ':proveedorId/edit',
        component: ProveedoresEditComponent,
        resolve: {
            data: ProveedoresResolve
        }
    }
    ,
    {
        path: 'create',
        component: ProveedoresEditComponent,
        resolve: {
            data: ProveedoresResolve
        }
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProveedoresRoutingModule {
}