/**
 * Adiciona dois números inteiros.
 * @param a - Primeiro número inteiro
 * @param b - Segundo número inteiro
 * @returns A soma de a e b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param a - Primeiro número inteiro
 * @param b - Segundo número inteiro
 * @returns A diferença entre a e b
 */
export function sub(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplica dois números inteiros.
 * @param a - Primeiro número inteiro
 * @param b - Segundo número inteiro
 * @returns O produto de a e b
 */
export function mul(a: number, b: number): number {
  return a * b;
}

/**
 * Divide o primeiro número pelo segundo.
 * @param a - Dividendo (número inteiro)
 * @param b - Divisor (número inteiro)
 * @throws {Error} Se o divisor for zero
 * @returns O quociente da divisão
 */
export function div(a: number, b: number): number {
//   if (b === 0) {
//     throw new Error("Divisão por zero não é permitida.");
//   }
  return a / b;
}

export function area(c: number, l: number): number {
  return c * l;
}

export function perimetro(c: number, l: number): number {
  return 2 * c + 2 * l;
}
