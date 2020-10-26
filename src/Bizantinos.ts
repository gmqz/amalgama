import { Civilizacion } from "./Civilizacion"


export class Bizantinos extends Civilizacion {
    constructor() {
        super();
        this.cantArqueros = 8
        this.cantCaballeros = 15
        this.cantPiqueros = 5
    }
}