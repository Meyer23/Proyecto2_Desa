import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {UsuariosComponent} from './usuarios.component';
import {UsuariosEditComponent} from "./usuarios-edit.component";
import {Usuarios} from "../../shared/models/usuarios";
import {UsuariosService} from "../../shared/services/usuarios.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})

export class UsuariosResolve implements Resolve<Usuarios> {
    
    constructor(private service: UsuariosService) {   }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuarios> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return of(new Usuarios());
    }
}

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent
    }
    ,
    {
        path: ':id/edit',
        component: UsuariosEditComponent,
        resolve: {
            data: UsuariosResolve
        }
    }
    ,
    {
        path: 'create',
        component: UsuariosEditComponent,
        resolve: {
            data: UsuariosResolve
        }
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
