import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

// Clases - TYPESCRIPT

abstract class Nombre {
    public nombrePropiedad?: string; // undefined
    private apellidoPropiedad: string = 'Eguez';
    protected edad = 1; // number (Duck Typing)
    static comun: number = 10;

    propiedadPublica: string;

    constructor(
        propiedadPublicaParametro: string, // parametro
        public propiedadRapido: string, // transforma una propiedad
    ) {
        this.propiedadPublica = propiedadPublicaParametro;
        // this.propiedadPublicaParametro ERROR
        // this.propiedadRapido; OK
    }

    public funcionPublica(parametroString: string): void {
        // no hay return = undefined
    }

    private funcionPrivada(parametroString: string, // ? = puede ser undefined
                           parametroNumber?: number)  { // omitir :void (defecto)
        // no hay return = undefined
    }

    protected funcionPublica(): number {
        return 1;
    }

    static funcionEstatica(): string {
        return 'string';
    }

}


/**/
