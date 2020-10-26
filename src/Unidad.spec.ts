import { Piquero } from './Piquero';
import { Ejercito } from './Ejercito';
import { Ingleses } from './Ingleses'

jest.mock('./Ejercito')
jest.mock('./Ingleses')

describe('Unidad', function() {
    let unit: Piquero
    
    beforeEach(() => {
        const civ = new Ingleses()
        const ejIngles = new Ejercito(civ)
        unit = new Piquero(ejIngles)
    });

    it('Should returns an Ejerceito', function() {
        expect(unit.getEjercito()).toBeInstanceOf(Ejercito)
    });

    it('getFuerza should greater than 0', function() {
        const result = unit.getFuerza()
        expect(result).toBeGreaterThan(0)
    });

    it('Should add 10 points of strength', function() {
        const prev = unit.getFuerza()
        unit.addFuerza(10)
        const result = unit.getFuerza() - prev

        expect(result).toEqual(10)
    });
});
