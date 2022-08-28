export interface Roles {
    id?: string;
    nombre?: string;
    modulos?: String[];
}

export class Roles implements Roles {
    constructor(
        id?: string,
        nombre?: string,
        modulos?: String[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.modulos = modulos;
    }
}
