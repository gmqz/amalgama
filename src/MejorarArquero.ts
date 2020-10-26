import { Caballero } from "./Caballero";
import { Conversion } from "./Conversion";
import { Ejercito } from "./Ejercito";
import { Unidad } from "./Unidad";

export class MejorarArquero extends Conversion {
    constructor() {
        super()
        this.costoEntrenamiento = 40
    }

    public getNewUnit(ejercito: Ejercito): Unidad {
        return new Caballero(ejercito)
    }
}
