import clock from "clock";
import document from "document";
import { preferences } from "user-settings"
import { getRandomItem } from "../common/utils"
import horasDeEspanol from "./horas-de-espanol"
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const ampm = document.getElementById("ampm");
const vez = document.getElementById("vez");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  const hoy = evt.date;
  const horas = hoy.getHours();
  const minutos = hoy.getMinutes();
  const {
    clockDisplay
  } = preferences

  const usarHorasCortas = clockDisplay === "12h" ? true : false
  const usarEnPunto = getRandomItem([1, 0])
  const usarCon = getRandomItem([0, 1])
  const usarY = getRandomItem([1, 0])

  const {
    tiempo,
    horasLeteras,
    preMinuto,
    minutosLeteras,
    cuando
  } = horasDeEspanol(horas, minutos, {
    usarEnPunto,
    usarHorasCortas,
    usarCon,
    usarY
  })
  vez.text = `${tiempo}`
  hora.text = `${horasLeteras}`
  minuto.text = `${preMinuto} ${minutosLeteras}`
  ampm.text = `${cuando}`;
}
