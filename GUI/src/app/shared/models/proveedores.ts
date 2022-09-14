export interface Proveedores {
    proveedorId: string;
    nombre: string;
    numeroCedula: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    saldo: number;
}

export class Proveedores implements Proveedores {
    constructor(proveedorId?: string,
                nombre?: string,
                numeroCedula?: string,
                ruc?: string,   
                telefono?: string,  
                email?: string, 
                direccion?: string           
                         
    ) {
        if (typeof proveedorId === "string") {
            this.proveedorId = proveedorId;
        }
        if (nombre != null) {
            this.nombre = nombre;
        }
        if (numeroCedula != null) {
            this.numeroCedula = numeroCedula;
        }
        if (ruc != null) {
            this.ruc = ruc;
        }
        if (telefono != null) {
            this.telefono = telefono;
        }
        if (email != null) {
            this.email = email;
        }
        if (direccion != null) {
            this.direccion = direccion;
        }
    }
}