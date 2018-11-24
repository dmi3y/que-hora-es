import { roundToBase } from './utils';

let numerosDeLetras: {[key: number]: string} = {
    0: 'cero',
    1: 'una',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve',
    10: 'diez',
    11: 'once',
    12: 'doce',
    13: 'trece',
    14: 'catorce',
    15: 'quince',
    16: 'dieciséis',
    20: 'veinte',
    22: 'veintidós',
    23: 'veintitrés',
    26: 'veintiséis',
    30: 'treinta',
    40: 'cuarenta',
    50: 'cincuenta',
    60: 'sesenta'
}

export function escribeNumero(numero: number): string[] {
    if (numerosDeLetras.hasOwnProperty(numero))  {
        return [numerosDeLetras[numero]]
    } else if (numero >= 17 && numero <= 19) {
        return ['dieci' + escribeNumero(numero - 10)]
    } else if (numero >= 21 && numero <= 29) {
        return ['veinti' + escribeNumero(numero - 20)]
    } else if (numero > 30) {
        const roundedDown = roundToBase(numero);
        const modulo = numero % roundedDown;
        return [...escribeNumero(roundedDown), ...escribeNumero(modulo)]
    }
}
