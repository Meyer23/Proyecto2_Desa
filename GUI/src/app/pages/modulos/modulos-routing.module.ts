import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {ModulosComponent} from './modulos.component';
import {ModulosEditComponent} from "./modulos-edit.component";
import {Modulos} from "../../shared/models/modulos";
import {ModulosService} from "../../shared/services/modulos.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class ModulosResolve implements Resolve<Modulos> {
    constructor(private service: ModulosService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Modulos> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return of(new Modulos());
    }
}

const routes: Routes = [
    {
        path: '',
        component: ModulosComponent,
    },
    {
        path: ':id/edit',
        component: ModulosEditComponent,
        resolve: {
            data: ModulosResolve
        }
    },
    {
        path: 'create',
        component: ModulosEditComponent,
        resolve: {
            data: ModulosResolve
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulosRoutingModule {
}