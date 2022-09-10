import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs';

// Project
import {environment} from 'src/environments/environment';
import {Clientes} from '../models/clientes';
import {map} from "rxjs/operators";

export type ENTITY_LIST_RESPONSE = {
    "total": Number,
    "clientes": Clientes[]
}

@Injectable({
    providedIn: 'root',
})

export class ClientesService {
    constructor(private http: HttpClient) {
    }

    list(): Observable<ENTITY_LIST_RESPONSE> {
        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/clientes`);
    }

    find(id: string): Observable<Clientes> {
        const params = new HttpParams().append('id', id);

        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/clientes`, {params})
            .pipe(
                map(value => value.clientes[0])
            );
    }

    create(cliente: Clientes): Observable<Clientes> {
        return this.http.post<Clientes>(`${environment.SERVER_API_URL}/clientes`, cliente);
    }

    edit(cliente: Clientes): Observable<Clientes> {
        return this.http.put<Clientes>(`${environment.SERVER_API_URL}/clientes/${cliente.clienteId}`, cliente);
    }

    delete(cliente: Clientes): Observable<Clientes> {
        return this.http.delete<Clientes>(`${environment.SERVER_API_URL}/clientes/${cliente.clienteId}`);
    }
}