import { Civilizacion } from './Civilizacion'
import { Ejercito } from './Ejercito'
import { Ingleses } from './Ingleses'

describe('Civilizacion', function() {
    let ingleses: Civilizacion
    
    beforeEach(() => {
        // Create a new Civilizaciont
        ingleses = new Ingleses();
    });

    it('Ejercitos should be an empty Set', () => {
        expect(ingleses.getEjercitos()).toEqual(new Set());
    });

    it('Ejercitos should not be an empty Set', () => {
        ingleses.createEjercito()
        expect(ingleses.getEjercitos().size).toEqual(1);

        ingleses.createEjercito()
        expect(ingleses.getEjercitos().size).toEqual(2);
    });

    it('createEjercitos should return an Ejercito', () => {
        const result = ingleses.createEjercito()
        expect(result).toBeInstanceOf(Ejercito)
    });
});
