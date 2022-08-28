import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {RolesComponent} from './roles.component';
import {RolesEditComponent} from "./roles-edit.component";
import {Observable, of} from "rxjs";
import {Roles} from "../../shared/models/roles";
import {RolesService} from "../../shared/services/roles.service";

@Injectable({providedIn: 'root'})
export class RolesResolve implements Resolve<Roles> {
    constructor(private service: RolesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Roles> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return of(new Roles());
    }
}

const routes: Routes = [
    {
        path: '',
        component: RolesComponent
    },
    {
        path: ':id/edit',
        component: RolesEditComponent,
        resolve: {
            data: RolesResolve
        }
    },
    {
        path: 'create',
        component: RolesEditComponent,
        resolve: {
            data: RolesResolve
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RolesRoutingModule {
}
