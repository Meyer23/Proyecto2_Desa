export interface Clientes {
    clienteId: string;
    numeroCedula: string;
    ruc: string;
    correo: string;
    tipoPersona: string;
    telefono: string;
    saldo: number;
}

export class Clientes implements Clientes {
    constructor(clienteId?: string,
                numeroCedula?: string,
                ruc?: string,   
                correo?: string, 
                tipoPersona?: string,                  
                telefono?: string,           
    ) {
        if (typeof clienteId === "string") {
            this.clienteId = clienteId;
        }
        if (numeroCedula != null) {
            this.numeroCedula = numeroCedula;
        }
        if (ruc != null) {
            this.ruc = ruc;
        }
        if (correo != null) {
            this.correo = correo;
        }
        if (tipoPersona != null) {
            this.tipoPersona = tipoPersona;
        }
        if (telefono != null) {
            this.telefono = telefono;
        }
    }
}