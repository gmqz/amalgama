import { Ejercito } from "./Ejercito";
import { Mejora } from "./Mejora";
import { Unidad } from "./Unidad";

export abstract class Conversion extends Mejora {
    constructor() {
        super()
    }

    abstract getNewUnit(ejercito: Ejercito): Unidad

    public entrenar(unit: Unidad): Unidad {
        const ejercito = unit.getEjercito()
        const newUnit = this.getNewUnit(ejercito);

        ejercito.removeUnit(unit)
        ejercito.spendOro(this.costoEntrenamiento)

        ejercito.addUnit(newUnit)

        return newUnit
    }
}