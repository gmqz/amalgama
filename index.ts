import { Chinos } from './src/Chinos';
import { Ingleses } from './src/Ingleses';


function bootstrap() {
    // const civChina = new Chinos();
    // const civIngleses = new Ingleses();
    // const ejChino = civChina.createEjercito();
    // const ejIngles = civIngleses.createEjercito();
    // const ejIngles2 = civIngleses.createEjercito();
    // const batalla = ejIngles.atacar(ejIngles2)
    // console.log(batalla.getWinner())
    // console.log(batalla.getLoser())

    // const batalla1 = ejChino.atacar(ejIngles)
    // const batalla2 = ejIngles.atacar(ejChino)
    
    //ejIngles.addBatalla(batalla)
    //console.log(civChina.getEjercitos());
    //console.log(civIngleses.getEjercitos());
    
    // console.log(batalla.getAtacante())
    // console.log(batalla2.getAtacante())
    
    const civIngleses = new Ingleses();
    const ejIngles = civIngleses.createEjercito();

    console.log(ejIngles)

    ejIngles.getUnidades()[0].mejorar()
    ejIngles.getUnidades()[1].mejorar()
    ejIngles.getUnidades()[3].entrenar()
    console.log(ejIngles)
}

bootstrap();
