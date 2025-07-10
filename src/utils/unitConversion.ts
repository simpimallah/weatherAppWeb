/**
 * Convert Celsius to Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32)
}

/**
 * Convert Fahrenheit to Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9)
}

/**
 * Convert kilometers per hour to miles per hour
 */
export function kmhToMph(kmh: number): number {
  return Math.round(kmh * 0.621371)
}

/**
 * Convert miles per hour to kilometers per hour
 */
export function mphToKmh(mph: number): number {
  return Math.round(mph / 0.621371)
}
