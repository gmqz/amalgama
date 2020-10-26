import { Ejercito } from './Ejercito';

export class Batalla {
    private winner: Ejercito | null = null
    private loser: Ejercito | null = null

    constructor(private atacante: Ejercito, private defensor: Ejercito) {
        // Runtime check
        if (atacante instanceof Ejercito && defensor instanceof Ejercito) {
            this.atacante.addBatalla(this)
            this.defensor.addBatalla(this)
        } else {
            throw 'Both params must be of type Ejercito'
        }

        this.resolve()
    }

    private resolve(): void {
        const puntajeAtacante = this.atacante.getPuntaje()
        const puntajeDefensor = this.defensor.getPuntaje()

        if (puntajeDefensor === 0 || puntajeAtacante === 0) {
            throw 'Both Armies must have units to fight!'
        }

        if (puntajeAtacante === puntajeDefensor) {
            /**
             * Assumption: En caso de empate ambos ejercitos pierden una unidad random
             * además, el atacante tiene un costo de 50 unidades de oro, en caso de no tener suficiente
             * pierde otra unidad random
             */
            try {
                this.atacante.spendOro(50)
            } catch (e) {
                this.atacante.removeRandomUnit()
            }
            this.atacante.removeRandomUnit()
            this.defensor.removeRandomUnit()
        } else {
            if (puntajeAtacante > puntajeDefensor) {
                this.winner = this.atacante
                this.loser = this.defensor
            } else {
                this.loser = this.atacante
                this.winner = this.defensor
            }
            this.winner.addOro(100)
            this.loser.removeBetterUnit(2)
        }
    }

    getAtacante(): Ejercito {
        return this.atacante;
    }

    getDefensor(): Ejercito {
        return this.defensor;
    }

    getWinner(): Ejercito | null {
        return this.winner;
    }

    getLoser(): Ejercito | null {
        return this.loser;
    }
}