import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {UsuariosComponent} from './usuarios.component';
//import {UserEditComponent} from "./user-edit.component";
import {Usuarios} from "../../shared/models/usuarios";
import {UsuariosService} from "../../shared/services/usuarios.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsuariosResolve implements Resolve<Usuarios> {
    constructor(private service: UsuariosService) {
    }

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
    //,
    //{
    //    path: ':uid/edit',
    //    component: UsuariosEditComponent,
    //    resolve: {
    //        data: UserResolve
    //    }
    //}
    //,
    //{
    //    path: 'create',
    //    component: UserEditComponent,
    //    resolve: {
    //        data: UserResolve
    //    }
   //}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
