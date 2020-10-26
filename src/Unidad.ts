import { Ejercito } from "./Ejercito"

export abstract class Unidad {
    protected fuerza: number = 0
    protected ejercito: Ejercito

    constructor(ejercito: Ejercito) {
        this.ejercito = ejercito
    }

    /**
     * Train a unit to improve the strength
     */
    abstract entrenar(): void

    /**
     * Upgrade a unit
     */
    public mejorar(): Unidad {
        return this
    }

    /**
     * Return the strength
     * 
     * @returns number
     */
    public getFuerza(): number {
        return this.fuerza
    }

    /**
     * Return Ejercito of a unit
     * 
     * @returns Ejercito
     */
    public getEjercito(): Ejercito {
        return this.ejercito
    }

    /**
     * Improve the strength in val
     * 
     * @param val 
     */
    public addFuerza(val: number): void {
        this.fuerza = this.fuerza + val
    }
}
