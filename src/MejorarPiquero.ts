import { Arquero } from "./Arquero";
import { Conversion } from "./Conversion";
import { Ejercito } from "./Ejercito";
import { Unidad } from "./Unidad";

export class MejorarPiquero extends Conversion {
    constructor() {
        super()
        this.costoEntrenamiento = 30
    }

    public getNewUnit(ejercito: Ejercito): Unidad {
        return new Arquero(ejercito)
    }
}
