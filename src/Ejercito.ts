import { Civilizacion } from './Civilizacion';
import { Unidad } from './Unidad';
import { Batalla } from './Batalla';

export class Ejercito {
    private oro: number
    private unidades: Array<Unidad> = []
    private civilizacion: Civilizacion
    private batallas: Set<Batalla>

    constructor(civilizacion: Civilizacion) {
        this.oro = 1000
        this.unidades = civilizacion.initUnidades(this)
        this.civilizacion = civilizacion
        this.batallas = new Set()
    }

    /**
     * Return Civilizacion
     * 
     * @returns Civilizacion
     */
    public getCivilizacion(): Civilizacion {
        return this.civilizacion
    }

    /**
     * Method Atacar
     * 
     * @param defensor 
     * @returns Batalla
     */
    public atacar(defensor: Ejercito): Batalla {
        if (this === defensor) {
            throw 'Hey! Are you insane? You cannot attack yourself'
        }

        if (!this.unidades.length) {
            throw 'Hears! What units will you use?'
        }

        let batalla = new Batalla(this, defensor)
        return batalla;
    }

    /**
     * Return Unidades
     * 
     * @returns Array<Unidad>
     */
    public getUnidades(): Array<Unidad> {
        return this.unidades
    }

    /**
     * Return Batalla
     * 
     * @returns Array<Unidad>
     */
    public getBatalla(): Set<Batalla> {
        return this.batallas
    }

    /**
     * Method addBatalla
     * 
     * @param batalla 
     */
    public addBatalla(batalla: Batalla): void {
        this.batallas.add(batalla);
    }

    /**
     * Method addUnit
     * 
     * @param unit 
     */
    public addUnit(unit: Unidad): void {
        this.unidades.push(unit);
    }

    /**
     * Method getOro
     * 
     * @returns Number
     */
    public getOro(): number {
        return this.oro
    }

    /**
     * Returns the power of the army
     * 
     * @returns Number
     */
    public getPuntaje(): number {
        return this.unidades.reduce((acc, unidad) => acc + unidad.getFuerza(), 0)
    }

    /**
     * Sum _value_ to army gold
     * 
     * @param value 
     */
    public addOro(value: number): void {
        this.oro = this.oro + value
    }

    /**
     * Subtract _value_ to army gold
     * Assumption: if doesn't have enough gold, an exception will be thrown
     * 
     * @param value 
     */
    public spendOro(value: number): void {
        if (this.oro < value) {
            throw 'Hey! You do not have enough gold'
        }

        this.oro = this.oro - value
    }

    /**
     * remove Unit
     * 
     * @param unit 
     */
    public removeUnit(unit: Unidad): void {
        this.unidades = this.unidades.filter((item) => item !== unit)
    }

    /**
     * Remove the _cant_ better units from the army
     * @param cant 
     */
    public removeBetterUnit(cant: number = 1): void {
        if (this.unidades.length === 0 ) {
            throw 'Hey! You do not have enough units'
        }

        this.unidades = this.unidades
            .sort((unitA: Unidad, unitB: Unidad) => unitA.getFuerza() - unitB.getFuerza())

        this.unidades.splice(-cant)
    }

    /**
     * Remove a random unit from the army
     */
    public removeRandomUnit(): void {
        if (this.unidades.length === 0 ) {
            throw 'Hey! You do not have enough units'
        }

        const random = Math.floor(Math.random() * this.unidades.length)

        this.unidades.splice(random, 1)
    }
}
