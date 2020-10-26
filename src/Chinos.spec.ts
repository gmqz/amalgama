import { Arquero } from './Arquero';
import { Caballero } from './Caballero';
import { Chinos } from './Chinos';
import { Civilizacion } from './Civilizacion';
import { Ejercito } from './Ejercito';
import { Piquero } from './Piquero';

describe('Chinos', function() {
    let civ: Civilizacion
    
    beforeEach(() => {
        // Create a new Civilizaciont
        civ = new Chinos();
    });

    it('Should be initialized with 2 Piqueros, 25 Arqueros, 2 Caballeros', function() {
        const ejIngles = new Ejercito(civ)
        const result = civ.initUnidades(ejIngles)
        expect(result.length).toEqual(29)

        const piqueros = result.filter((unidad) => unidad instanceof Piquero)
        const arqueros = result.filter((unidad) => unidad instanceof Arquero)
        const caballeros = result.filter((unidad) => unidad instanceof Caballero)
        expect(piqueros.length).toEqual(2)
        expect(arqueros.length).toEqual(25)
        expect(caballeros.length).toEqual(2)
    }); 
    
});