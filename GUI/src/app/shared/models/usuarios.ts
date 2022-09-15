export interface Usuarios {
    id: string;
    nombre: string;
    idRol: string;
    email: string;  
    password: string;
}

export class Usuarios implements Usuarios {
    constructor(id?: string,
                nombre?: string,
                idRol?: string,
                email?: string,
                password?: string                      
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
        if (password != null) {
            this.password = password;
        }          
    }
}