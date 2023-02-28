/* Array<T> ou T[] */
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
function concatenation(...args: string[]): string {
  return args.reduce((string1, string2) => string1 + " " + string2);
}
function toUpperCase(...args: string[]): string {
  return args.reduce((string1, string2) => string1.toUpperCase() + " " + string2.toUpperCase());
}
const resultado = toUpperCase("Eu só", "quero é ser feliz", "colocar");
console.log(resultado);
console.log(multiplyArgs(2, 2));
console.log(concatenation("Eu só", "quero é ser feliz", "colocar"));
