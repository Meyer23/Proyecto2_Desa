export interface Usuarios {
    id: string;
    nombre: string;
    idRol: string;
    email: string;  
}

export class Usuarios implements Usuarios {
    constructor(id?: string,
                nombre?: string,
                idRol?: string,
                email?: string                      
    ) {
        if (typeof id === "string") {
            this.id = id;
        }
        if (nombre != null) {
            this.nombre = nombre;
        }
        if (idRol != null) {
            this.idRol = idRol;
        }
        if (email != null) {
            this.email = email;
        }       
    }
}