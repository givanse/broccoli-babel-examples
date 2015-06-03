
/* named export */

export function average(numbers=[]) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum / numbers.length;
}
