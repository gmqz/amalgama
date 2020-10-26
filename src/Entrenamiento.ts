import { Mejora } from "./Mejora";
import { Unidad } from "./Unidad";

export abstract class Entrenamiento extends Mejora {
    protected mejoraDeFuerza: number = 0

    entrenar(unidad: Unidad): Unidad {
        unidad.getEjercito().spendOro(this.costoEntrenamiento)
        unidad.addFuerza(this.mejoraDeFuerza)

        return unidad
    }
}