import { Arquero } from './Arquero';
import { Caballero } from './Caballero';
import { Civilizacion } from './Civilizacion';
import { Ejercito } from './Ejercito';
import { Ingleses } from './Ingleses'
import { Piquero } from './Piquero';

describe('Ingleses', function() {
    let civ: Civilizacion
    
    beforeEach(() => {
        // Create a new Civilizaciont
        civ = new Ingleses();
    });

    it('Should be initialized with 10 Piqueros, 10 Arqueros, 10 Caballeros', function() {
        const ejIngles = new Ejercito(civ)
        const result = civ.initUnidades(ejIngles)
        expect(result.length).toEqual(30)

        const piqueros = result.filter((unidad) => unidad instanceof Piquero)
        const arqueros = result.filter((unidad) => unidad instanceof Arquero)
        const caballeros = result.filter((unidad) => unidad instanceof Caballero)
        expect(piqueros.length).toEqual(10)
        expect(arqueros.length).toEqual(10)
        expect(caballeros.length).toEqual(10)
    }); 
    
});