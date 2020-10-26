import { Piquero } from './Piquero';
import { Ejercito } from './Ejercito';
import { Ingleses } from './Ingleses'
import { Arquero } from './Arquero';

describe('Piquero', function() {
    let unit: Piquero
    let ejercito: Ejercito
    
    beforeEach(() => {
        const civ = new Ingleses()
        ejercito = new Ejercito(civ)
        unit = new Piquero(ejercito)
    });

    it('getFuerza should be 5', function() {
        const result = unit.getFuerza()
        expect(result).toEqual(5)
    }); 

    it('createUnidades should return an Array of Piquero', function() {
        const result = Piquero.createUnidades(5, unit.getEjercito())
        expect(result).toBeInstanceOf(Array)
        expect(result.length).toEqual(5)
        expect(result[0]).toBeInstanceOf(Piquero)
    });

    it('entrenar should add 3 points of strength and const 10 of Oro', function() {
        const oroPrev = ejercito.getOro()
        const prevStrength = unit.getFuerza()
        unit.entrenar()

        const costoOro = oroPrev - ejercito.getOro()
        const incrementoFuerza = unit.getFuerza() - prevStrength
        expect(costoOro).toEqual(10)
        expect(incrementoFuerza).toEqual(3)
    });

    it('mejorar should returns an Arquero unit and const 30 of Oro', function() {
        const oroPrev = ejercito.getOro()
        const result = unit.mejorar()

        const costoOro = oroPrev - ejercito.getOro()

        expect(costoOro).toEqual(30)
        expect(result).toBeInstanceOf(Arquero)
    });
});
