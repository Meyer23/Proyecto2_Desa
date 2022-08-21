export interface User {
    estado: boolean;
    nombre: string;
    correo: string;
    rol: string;
    id: string;
}

export class User implements User {
    constructor(nombre?: string,
                correo?: string,
                rol?: string,
                id?: string
    ) {
        if (typeof id === "string") {
            this.id = id;
        }
        if (nombre != null) {
            this.nombre = nombre;
        }
        if (correo != null) {
            this.correo = correo;
        }
        if (rol != null) {
            this.rol = rol;
        }
    }
}