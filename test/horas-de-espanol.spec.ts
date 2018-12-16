import * as assert from 'assert'
import 'mocha'

import horasDeEspanol, {Opciones} from '../app/horas-de-espanol'

describe('Horas de espanol', function () {
  describe('Horas especiales', function () {
    const opciones: Opciones = {
      usarHorasCortas: true,
      usarEnPunto: true
    }
    it('debera correcto salida con 1:00', function () {
      const unaDeManana = horasDeEspanol(1, 0, opciones)
      assert.deepStrictEqual(unaDeManana, {
        tiempo: 'Es la',
        horasLeteras: 'una',
        minutosLeteras: 'en punto',
        preMinuto: '',
        cuando: 'de la madrugada'
      });
    });

    it('debera correcto salida con 13:00', function () {
      const unaDeTarde = horasDeEspanol(13, 0, opciones)
      assert.deepStrictEqual(unaDeTarde, {
        tiempo: 'Es la',
        horasLeteras: 'una',
        minutosLeteras: 'en punto',
        preMinuto: '',
        cuando: 'de la tarde'
      });
    });

    it('debera correcto salida con 12:00', function () {
      const mediodia = horasDeEspanol(12, 0, opciones)
      assert.deepStrictEqual(mediodia, {
        tiempo: 'Son las',
        horasLeteras: 'doce',
        minutosLeteras: 'en punto',
        preMinuto: '',
        cuando: 'del mediadia'
      });
    });

    it('debera correcto salida con 00:00', function () {
      const medianoche = horasDeEspanol(0, 0, opciones)
      assert.deepStrictEqual(medianoche, {
        tiempo: 'Son las',
        horasLeteras: 'doce',
        minutosLeteras: 'en punto',
        preMinuto: '',
        cuando: 'de la madrugada'
      });
    });
  })
});
