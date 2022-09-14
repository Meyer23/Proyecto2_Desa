import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

// Rx
import {Observable} from 'rxjs';

// Project
import {environment} from 'src/environments/environment';
import {Proveedores} from '../models/proveedores';
import {map} from "rxjs/operators";

export type ENTITY_LIST_RESPONSE = {
    "total": Number,
    "proveedores": Proveedores[]
}

@Injectable({
    providedIn: 'root',
})

export class ProveedoresService {
    constructor(private http: HttpClient) {
    }

    list(): Observable<ENTITY_LIST_RESPONSE> {
        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/proveedores`);
    }

    find(id: string): Observable<Proveedores> {
        const params = new HttpParams().append('id', id);

        return this.http.get<ENTITY_LIST_RESPONSE>(`${environment.SERVER_API_URL}/proveedores`, {params})
            .pipe(
                map(value => value.proveedores[0])
            );
    }

    create(proveedor: Proveedores): Observable<Proveedores> {
        return this.http.post<Proveedores>(`${environment.SERVER_API_URL}/proveedores`, proveedor);
    }

    edit(proveedor: Proveedores): Observable<Proveedores> {
        return this.http.put<Proveedores>(`${environment.SERVER_API_URL}/proveedores/${proveedor.proveedorId}`, proveedor);
    }

    delete(proveedor: Proveedores): Observable<Proveedores> {
        return this.http.delete<Proveedores>(`${environment.SERVER_API_URL}/proveedores/${proveedor.proveedorId}`);
    }
}