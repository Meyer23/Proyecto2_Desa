export interface Roles {
    id?: string;
    nombreRol?: string;
    modulos?: String[];
}

export class Roles implements Roles {
    constructor(
        id?: string,
        nombreRol?: string,
        modulos?: String[]
    ) {
        this.id = id;
        this.nombreRol = nombreRol;
        this.modulos = modulos;
    }
}
