export interface Usuarios {
    id: number;
    nombre: string;
    idRol: number;
    email: string;  
    password: string;
}

export class Usuarios implements Usuarios {
    constructor(id?: number,
                nombre?: string,
                idRol?: number,
                email?: string,
                password?: string                      
    ) {
        if (id != null) {
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