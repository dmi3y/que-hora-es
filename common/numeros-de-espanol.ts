import { roundToBase } from './utils';

/**
 * @returns {Map}
 */
let numberMap: {[key: number]: string} = {
    0: 'en punto',
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
    16: 'dieciséis', // has extra accent
    20: 'veinte',
    22: 'veintidós', // accent
    23: 'veintitrés', // accent
    26: 'veintiséis', // accent
    30: 'treinta',
    40: 'cuarenta',
    50: 'cincuenta',
    60: 'sesenta'
}

export function escribeNumero(number: number): string {

    if (numberMap[number]) {
        return numberMap[number];
    }

    if (number >= 17 && number <= 19) {
        return 'dieci' + escribeNumero(number - 10);
    }
    if (number >= 21 && number <= 29) {
        return 'veinti' + escribeNumero(number - 20);
    }
    if (number > 30 && number <= 999) {
        const roundedDown = roundToBase(number);
        const modulo = number % roundedDown;
        if (number > 30 && number < 100) {
            return escribeNumero(roundedDown) + ' y ' + escribeNumero(modulo);
        }
        return escribeNumero(roundedDown) + ' ' + escribeNumero(modulo);
    }
}
