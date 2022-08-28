// Angular
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs';

// Project
import {environment} from 'src/environments/environment';
import {Modulos} from '../models/modulos';
import {map} from "rxjs/operators";

export type ENTITY_LIST_RESPONSE = {
    "total": Number,
    "modulos": Modulos[]
}

@Injectable({
    providedIn: 'root',
})

export class ModulosService {
    constructor(private http: HttpClient) {
    }

    list(): Observable<ENTITY_LIST_RESPONSE> {
        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/modulos`);
    }

    find(id: string): Observable<Modulos> {
        const params = new HttpParams().append('id', id);

        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/modulos`, {params})
            .pipe(
                map(value => value.modulos[0])
            );
    }

    create(modulo: Modulos): Observable<Modulos> {
        return this.http.post<Modulos>(`${environment.SERVER_API_URL}/modulos`, modulo);
    }

    edit(modulo: Modulos): Observable<Modulos> {
        return this.http.put<Modulos>(`${environment.SERVER_API_URL}/modulos/${modulo.id}`, modulo);
    }

    delete(modulo: Modulos): Observable<Modulos> {
        return this.http.delete<Modulos>(`${environment.SERVER_API_URL}/modulos/${modulo.id}`);
    }
}