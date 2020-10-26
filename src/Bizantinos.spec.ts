import { Arquero } from './Arquero';
import { Caballero } from './Caballero';
import { Civilizacion } from './Civilizacion';
import { Ejercito } from './Ejercito';
import { Bizantinos } from './Bizantinos'
import { Piquero } from './Piquero';

describe('Bizantinos', function() {
    let civ: Civilizacion
    
    beforeEach(() => {
        // Create a new Civilizaciont
        civ = new Bizantinos();
    });

    it('Should be initialized with 5 Piqueros, 8 Arqueros, 15 Caballeros', function() {
        const ejIngles = new Ejercito(civ)
        const result = civ.initUnidades(ejIngles)
        expect(result.length).toEqual(28)

        const piqueros = result.filter((unidad) => unidad instanceof Piquero)
        const arqueros = result.filter((unidad) => unidad instanceof Arquero)
        const caballeros = result.filter((unidad) => unidad instanceof Caballero)
        expect(piqueros.length).toEqual(5)
        expect(arqueros.length).toEqual(8)
        expect(caballeros.length).toEqual(15)
    }); 
    
});