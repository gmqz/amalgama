import { Ejercito } from './Ejercito';
import { Unidad } from './Unidad';
import { Arquero } from "./Arquero";
import { Caballero } from "./Caballero";
import { Piquero } from "./Piquero";

export abstract class Civilizacion {
    protected ejercitos: Set<Ejercito> = new Set()
    protected cantArqueros: number = 0
    protected cantCaballeros: number = 0
    protected cantPiqueros: number = 0

    /**
     * Return a Set of Ejercito
     * 
     * @returns Set<Ejercito>
     */
    public getEjercitos(): Set<Ejercito> {
        return this.ejercitos;
    }

    /**
     * Create a new Ejercito
     * 
     * @returns Ejercito
     */
    public createEjercito(): Ejercito {
        const ejercito = new Ejercito(this)
        this.ejercitos.add(ejercito)

        return ejercito
    }

    /**
     * Returns an array of units based on the civilization type
     * 
     * @param ejercito 
     * @returns Array<Unidad>
     */
    public initUnidades(ejercito: Ejercito): Array<Unidad> {
        return [
            ...Arquero.createUnidades(this.cantArqueros, ejercito),
            ...Caballero.createUnidades(this.cantCaballeros, ejercito),
            ...Piquero.createUnidades(this.cantPiqueros, ejercito)
        ]
    }
}