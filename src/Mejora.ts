import { Unidad } from "./Unidad";

export abstract class Mejora {
    protected costoEntrenamiento: number = 0

    abstract entrenar(unit: Unidad): Unidad
}