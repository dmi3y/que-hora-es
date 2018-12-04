import clock from "clock";
import document from "document";
import horasDeEspanol from "../common/horas-de-espanol"
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
    tiempo,
    horasLeteras,
    preMinuto,
    minutosLeteras,
    cuando
  } = horasDeEspanol(horas, minutos)
  vez.text = `${tiempo}`
  hora.text = `${horasLeteras}`
  minuto.text = `${preMinuto} ${minutosLeteras}`
  ampm.text = `${cuando}`;
}
