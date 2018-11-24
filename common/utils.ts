// Add zero in front of numbers < 10
export function zeroPad(i: number) {
  let out: number | string = i
  if (i < 10) {
    out = "0" + i;
  }
  return out;
}

// Rounds the number down to whole base number
export function roundToBase(number: number) {
    const pow = number.toString().length - 1;
    const base = Math.pow(10, pow);
    return Math.floor(number / base) * base;
}

// get random element from array
export const getRandomItem = (items: any[]) => items[Math.floor(Math.random()*items.length)]
