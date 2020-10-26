import { Entrenamiento } from "./Entrenamiento";

export class EntrenarCaballero extends Entrenamiento {
    constructor() {
        super()
        this.costoEntrenamiento = 30
        this.mejoraDeFuerza = 10
    }
}