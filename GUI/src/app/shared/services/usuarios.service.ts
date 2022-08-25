// Angular
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs';

// Project
import {environment} from 'src/environments/environment';
import {Usuarios} from '../models/usuarios';
import {map} from "rxjs/operators";

export type ENTITY_LIST_RESPONSE = {
    "total": Number,
    "usuarios": Usuarios[]
}

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    constructor(private http: HttpClient) {
    }

    list(): Observable<ENTITY_LIST_RESPONSE> {
        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/usuarios`);
    }

    find(id: string): Observable<Usuarios> {
        const params = new HttpParams().append('id', id);

        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/usuarios`, {params})
            .pipe(
                map(value => value.usuarios[0])
            );
    }

    create(usuario: Usuarios): Observable<Usuarios> {
        return this.http.post<Usuarios>(`${environment.SERVER_API_URL}/usuarios`, usuario);
    }

    edit(usuario: Usuarios): Observable<Usuarios> {
        return this.http.put<Usuarios>(`${environment.SERVER_API_URL}/usuarios/${usuario.id}`, usuario);
    }

    delete(usuario: Usuarios): Observable<Usuarios> {
        return this.http.delete<Usuarios>(`${environment.SERVER_API_URL}/usuarios/${usuario.id}`);
    }
}