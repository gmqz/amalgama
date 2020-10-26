import { Piquero } from './Piquero';
import { Ejercito } from './Ejercito';
import { Ingleses } from './Ingleses'
import { Arquero } from './Arquero';
import { Caballero } from './Caballero';

describe('Arquero', function() {
    let unit: Arquero
    let ejercito: Ejercito
    
    beforeEach(() => {
        const civ = new Ingleses()
        ejercito = new Ejercito(civ)
        unit = new Arquero(ejercito)
    });

    it('getFuerza should be 10', function() {
        const result = unit.getFuerza()
        expect(result).toEqual(10)
    }); 

    it('createUnidades should return an Array of Arquero', function() {
        const result = Arquero.createUnidades(5, unit.getEjercito())
        expect(result).toBeInstanceOf(Array)
        expect(result.length).toEqual(5)
        expect(result[0]).toBeInstanceOf(Arquero)
    });

    it('entrenar should add 7 points of strength and const 20 of Oro', function() {
        const oroPrev = ejercito.getOro()
        const prevStrength = unit.getFuerza()
        unit.entrenar()

        const costoOro = oroPrev - ejercito.getOro()
        const incrementoFuerza = unit.getFuerza() - prevStrength
        expect(costoOro).toEqual(20)
        expect(incrementoFuerza).toEqual(7)
    });

    it('mejorar should returns an Caballero unit and const 40 of Oro', function() {
        const oroPrev = ejercito.getOro()
        const result = unit.mejorar()

        const costoOro = oroPrev - ejercito.getOro()

        expect(costoOro).toEqual(40)
        expect(result).toBeInstanceOf(Caballero)
    });
});
