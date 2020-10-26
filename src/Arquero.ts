import { Ejercito } from "./Ejercito";
import { EntrenarArquero } from "./EntrenarArquero";
import { MejorarArquero } from "./MejorarArquero";
import { Unidad } from "./Unidad";

export class Arquero extends Unidad {
    constructor(ejercito: Ejercito) {
        super(ejercito)
        this.fuerza = 10
    }

    static createUnidades(cant: number, ejercito: Ejercito): Array<Unidad> {
        const unidades: Array<Arquero> = []
        for (let i = 0; i < cant; i++) {
            unidades.push(new Arquero(ejercito))
        }

        return unidades
    }

    public entrenar(): void {
        const strategy = new EntrenarArquero()
        strategy.entrenar(this)
    }

    public mejorar(): Unidad {
        const strategy = new MejorarArquero()
        return strategy.entrenar(this)
    }
}