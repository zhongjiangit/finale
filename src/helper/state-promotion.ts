/**
 * 
 * @param temperature 
 * @param convert 
 * @returns 
 */
export function tryConvert(temperature: string, convert: Function) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

export function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}