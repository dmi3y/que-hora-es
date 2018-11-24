import { escribeNumero } from "../common/numeros-de-espanol"
import { getRandomItem } from "../common/utils"

const MAX_MINUTOS_LENGTH = 15

export default (horas: number, minutos: number): {
    tiempo: string
    horasLeteras: string
    minutosLeteras: string
    preMinuto: string
    cuando: string
} => {
  let cortasHoras = (horas % 12) || 12
  let horasLeteras = escribeNumero(cortasHoras).pop()
  let minutosLeterasRaw = escribeNumero(minutos)
  let minutosLeteras = minutosLeterasRaw.join(' y ')
  let isComposed = minutosLeteras.length === 2
  let isPunto = minutos === 0
  let isSingular = cortasHoras === 1

  let tiempo = `Son las`
  if (isSingular) tiempo = `Es la`


  let cuando = 'mañana'
  if (horas < 6) cuando = 'madrugada'
  if (horas >= 12) cuando = 'tarde'
  if (horas > 20) cuando = 'noche'

  let pre = ['']
  if (isPunto) {
      minutosLeteras = 'en punto'
  } else {
    if (minutosLeteras.length + 3 <= MAX_MINUTOS_LENGTH && !isComposed) pre = ['y']
    if (minutosLeteras.length + 5 <= MAX_MINUTOS_LENGTH) pre.push('con')
  }

  let preMinuto = getRandomItem(pre)

  return {
      tiempo,
      horasLeteras,
      minutosLeteras,
      preMinuto,
      cuando,
  }
}
