import { Batalla } from './Batalla';
import { Caballero } from './Caballero';
import { Civilizacion } from './Civilizacion'
import { Ejercito } from './Ejercito'
import { Ingleses } from './Ingleses'
import { Piquero } from './Piquero';
import { Unidad } from './Unidad';

describe('Ejercito', function() {
    let civ: Civilizacion
    let ejercito: Ejercito
    let ejercitoAux: Ejercito
    
    beforeEach(() => {
        // Create a new Civilizaciont
        civ = new Ingleses();
        ejercito = new Ejercito(civ)
        ejercitoAux = new Ejercito(civ)
    });

    it('getCivilizacion should returns a Civilizacion', () => {
        expect(ejercito.getCivilizacion()).toBeInstanceOf(Civilizacion)
    });

    it('atacar should return a Batalla', () => {
        expect(ejercito.atacar(ejercitoAux)).toBeInstanceOf(Batalla)
    });

    it('getUnidades should return an Array of Unidad', () => {
        expect(ejercito.getUnidades()).toBeInstanceOf(Array)
        expect(ejercito.getUnidades()[0]).toBeInstanceOf(Unidad)
    });

    it('getBatalla should return a Set of Batalla', () => {
        expect(ejercito.getBatalla()).toBeInstanceOf(Set)
        ejercito.atacar(ejercitoAux)
        expect(ejercito.getBatalla().size).toEqual(1)
    });

    it('addBatalla should add a Batalla', () => {
        expect(ejercito.getBatalla().size).toEqual(0)
        ejercito.atacar(ejercitoAux)
        expect(ejercito.getBatalla().size).toEqual(1)
    });

    it('addBatalla should not add repeated Batalla', () => {
        const batalla = new Batalla(ejercito, ejercitoAux)
        expect(ejercito.getBatalla().size).toEqual(1)
        ejercito.addBatalla(batalla)
        ejercito.addBatalla(batalla)
        expect(ejercito.getBatalla().size).toEqual(1)
    });

    it('addUnit should add a Unit', () => {
        const cantUnidades = ejercito.getUnidades().length
        const unit = new Piquero(ejercito)
        ejercito.addUnit(unit)
        const result = ejercito.getUnidades().length - cantUnidades
        expect(result).toEqual(1)
    });

    it('removeUnit should remove a Unit', () => {
        const cantUnidades = ejercito.getUnidades().length
        const unit = ejercito.getUnidades()[0]
        ejercito.removeUnit(unit)
        const result = cantUnidades - ejercito.getUnidades().length
        expect(result).toEqual(1)
        
        const result1 = ejercito.getUnidades().findIndex((item) => item === unit)
        expect(result1).toEqual(-1)
    });

    it('getOro should return 1000', () => {
        expect(ejercito.getOro()).toEqual(1000)
    });

    it('addOro should return 1100', () => {
        ejercito.addOro(100)
        expect(ejercito.getOro()).toEqual(1100)
    });

    it('spendOro should return 900', () => {
        ejercito.spendOro(100)
        expect(ejercito.getOro()).toEqual(900)
    });

    it('removeBetterUnit should remove the better unit', () => {
        const unit = new Caballero(ejercito)
        unit.entrenar()
        ejercito.addUnit(unit)
        const result = ejercito.getUnidades().findIndex((item) => item === unit)
        expect(result).toBeGreaterThan(-1)

        ejercito.removeBetterUnit()

        const result1 = ejercito.getUnidades().findIndex((item) => item === unit)
        expect(result1).toEqual(-1)
    });

    it('removeBetterUnit should throw an exception', () => {
        ejercito.getUnidades().forEach((unit) => ejercito.removeUnit(unit))
        expect(ejercito.getUnidades().length).toEqual(0)

        expect(() => { ejercito.removeBetterUnit() }).toThrow('Hey! You do not have enough units')
    });

    it('removeRandomUnit should remove the better unit', () => {
        const cantUnidades = ejercito.getUnidades().length
        ejercito.removeRandomUnit()
        const result = cantUnidades - ejercito.getUnidades().length

        expect(result).toEqual(1)
    });

    it('removeRandomUnit should throw an exception', () => {
        ejercito.getUnidades().forEach((unit) => ejercito.removeUnit(unit))
        expect(ejercito.getUnidades().length).toEqual(0)

        expect(() => { ejercito.removeRandomUnit() }).toThrow('Hey! You do not have enough units')
    });
});
