export interface Modulos {
    id: string;
    nombre: string;
}

export class Modulos implements Modulos {
    constructor(
        id?: string,
        nombre?: string               
    ) {
        if (typeof id === "string") {
            this.id = id;
        }
        
        if (nombre != null) {
            this.nombre = nombre;
        }
    }
}