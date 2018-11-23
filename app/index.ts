import clock from "clock";
import document from "document";
import { escribeNumero } from "../common/numeros-de-espanol"
import { getRandomItem } from "../common/utils"
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const ampm = document.getElementById("ampm");
const vez = document.getElementById("vez");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const MAX_MINUTOS_LENGTH = 15

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let hoy = evt.date;
  let horas = hoy.getHours();
  let minutos = hoy.getMinutes();
  let horasLeteras = escribeNumero(horas % 12)
  let minutosLeteras = escribeNumero(minutos)
  let haveY = minutosLeteras.split(' ')[1] === 'y'
  let isPunto = minutos === 0
  let isSingular = horas === 1

  let tiempo = `Son las`
  if (isSingular)`Es la`


  let cuando = 'mañana'
  if (horas < 6) cuando = 'madrugada'
  if (horas > 12) cuando = 'tarde'
  if (horas > 20) cuando = 'noche'
  vez.text = `${tiempo}`
  hora.text = `${horasLeteras}`

  let pre = ['']
  if (!isPunto) {
    if (minutosLeteras.length + 3 <= MAX_MINUTOS_LENGTH && !haveY) pre = ['y']
    if (minutosLeteras.length + 5 <= MAX_MINUTOS_LENGTH) pre.push('con')
  }

  let preMinuto = getRandomItem(pre)
  minuto.text = `${preMinuto} ${minutosLeteras}`
  ampm.text = `de la ${cuando}`;
}
