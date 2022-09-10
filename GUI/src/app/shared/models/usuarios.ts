export interface Usuarios {
    id: string;
    nombre: string;
    email: string;
    nombreRol: string;
}

export class Usuarios implements Usuarios {
    constructor(id?: string,
                nombre?: string,
                nombreRol?: string,
                email?: string                      
    ) {
        if (typeof id === "string") {
            this.id = id;
        }
        if (nombre != null) {
            this.nombre = nombre;
        }
        if (email != null) {
            this.email = email;
        }
        if (nombreRol != null) {
            this.nombreRol = nombreRol;
        }
    }
}