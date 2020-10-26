import { Piquero } from './Piquero';
import { Ejercito } from './Ejercito';
import { Ingleses } from './Ingleses'
import { Arquero } from './Arquero';
import { Caballero } from './Caballero';

describe('Caballero', function() {
    let unit: Caballero
    let ejercito: Ejercito
    
    beforeEach(() => {
        const civ = new Ingleses()
        ejercito = new Ejercito(civ)
        unit = new Caballero(ejercito)
    });

    it('getFuerza should be 20', function() {
        const result = unit.getFuerza()
        expect(result).toEqual(20)
    }); 

    it('createUnidades should return an Array of Caballero', function() {
        const result = Caballero.createUnidades(5, unit.getEjercito())
        expect(result).toBeInstanceOf(Array)
        expect(result.length).toEqual(5)
        expect(result[0]).toBeInstanceOf(Caballero)
    });

    it('entrenar should add 10 points of strength and const 30 of Oro', function() {
        const oroPrev = ejercito.getOro()
        const prevStrength = unit.getFuerza()
        unit.entrenar()

        const costoOro = oroPrev - ejercito.getOro()
        const incrementoFuerza = unit.getFuerza() - prevStrength
        expect(costoOro).toEqual(30)
        expect(incrementoFuerza).toEqual(10)
    });

    it('mejorar should returns the same unit and const 0', function() {
        const oroPrev = ejercito.getOro()
        const result = unit.mejorar()

        const costoOro = oroPrev - ejercito.getOro()

        expect(costoOro).toEqual(0)
        expect(result).toEqual(unit)
    });
});
