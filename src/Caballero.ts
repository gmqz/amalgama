import { Ejercito } from "./Ejercito";
import { EntrenarCaballero } from "./EntrenarCaballero";
import { Unidad } from "./Unidad";

export class Caballero extends Unidad {
    constructor(ejercito: Ejercito) {
        super(ejercito)
        this.fuerza = 20
    }

    static createUnidades(cant: number, ejercito: Ejercito): Array<Unidad> {
        const unidades: Array<Caballero> = []
        for (let i = 0; i < cant; i++) {
            unidades.push(new Caballero(ejercito))
        }

        return unidades
    }

    public entrenar():void {
        const strategy = new EntrenarCaballero()
        strategy.entrenar(this)
    }
}