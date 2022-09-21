// Angular
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs';

// Role
import {environment} from 'src/environments/environment';
import {Roles} from '../models/roles';
import {Modulos} from "../models/modulos";
import {map} from "rxjs/operators";

export type ENTITY_LIST_RESPONSE = {
    "roles": Roles[]
}

@Injectable({
    providedIn: 'root',
})
export class RolesService {
    constructor(private http: HttpClient) {
    }

    list(): Observable<ENTITY_LIST_RESPONSE> {
        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/roles`);
    }

    find(id: string): Observable<Roles> {
        const params = new HttpParams().append('id', id);

        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/roles/`, {params})
            .pipe(
               map(value => value.roles[0])
           );
    }

    create(rol: Roles): Observable<Modulos> {
        return this.http.post<Modulos>(`${environment.SERVER_API_URL}/roles`, rol);
    }

    edit(rol: Roles): Observable<Modulos> {
        return this.http.put<Modulos>(`${environment.SERVER_API_URL}/roles/${rol.id}`, rol);
    }

    delete(rol: Roles): Observable<Modulos> {
        return this.http.delete<Modulos>(`${environment.SERVER_API_URL}/roles/${rol.id}`);
    }
}