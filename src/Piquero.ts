import { Ejercito } from "./Ejercito";
import { EntrenarPiquero } from "./EntrenarPiquero";
import { MejorarPiquero } from "./MejorarPiquero";
import { Unidad } from "./Unidad";

export class Piquero extends Unidad {
    constructor(ejercito: Ejercito) {
        super(ejercito)
        this.fuerza = 5
    }

    static createUnidades(cant: number, ejercito: Ejercito): Array<Unidad> {
        const unidades: Array<Piquero> = []
        for (let i = 0; i < cant; i++) {
            unidades.push(new Piquero(ejercito))
        }

        return unidades
    }

    public entrenar():void {
        const strategy = new EntrenarPiquero()
        strategy.entrenar(this)
    }

    public mejorar(): Unidad {
        const strategy = new MejorarPiquero()
        return strategy.entrenar(this)
    }
}
