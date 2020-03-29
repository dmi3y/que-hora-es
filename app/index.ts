import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { getRandomItem } from "../common/utils";
import init, { Usettings } from "./settings";
import horasDeEspanol from "./horas-de-espanol";
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const ampm = document.getElementById("ampm");
const vez = document.getElementById("vez");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");

const { clockDisplay } = preferences;
clockDisplay === "12h" ? false : true

const STATE: {
  settings: Usettings
  horas: number
  minutos: number
} = {
  settings: {
    military: false
  },
  horas: 0,
  minutos: 0
}

function render () {
  let {
    settings: {
      military
    },
    horas,
    minutos,
  } = STATE
  if (military === null)
    military = preferences.clockDisplay === '24h' ? true : false
  const usarHorasCortas = !military

  const usarEnPunto = getRandomItem([1, 0]);
  const usarCon = getRandomItem([0, 1]);
  const usarY = getRandomItem([1, 0]);

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
  });
    const tampm = military ? '' : cuando
    vez && (vez.text = `${tiempo}`);
    hora && (hora.text = `${horasLeteras}`);
    minuto && (minuto.text = `${preMinuto} ${minutosLeteras}`);
    ampm && (ampm.text = `${tampm}`);

}

init((settings: Usettings) => {
  STATE.settings = settings

  render()
})

// Update the <text> element every tick with the current time
clock.ontick = evt => {
  const hoy = evt.date;
  const horas = hoy.getHours();
  const minutos = hoy.getMinutes();

  STATE.horas = horas
  STATE.minutos = minutos

  render()
};
