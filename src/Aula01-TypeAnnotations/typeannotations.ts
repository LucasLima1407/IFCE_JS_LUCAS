/* Tipos básicos */
const nome = "Lucas";
const idade = 19;
const adulto = true;
const simbolo = Symbol("simbolos");

/* Arrays */
const ArraydeNumeros: Array<number> = [1, 4, 8, 10];
const ArraydeNumeros2: number[] = [1, 4, 8, 10];
const ArraydeStrings: Array<string> = ["Lucas", "Neto", "Jonatha"];
const ArraydeStrings2: string[] = ["Lucas", "Neto", "Jonatha"];

/* Objetos */
const pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean
} = {
  nome: "Lucas",
  idade: 19,
  adulto: false
};

/* Funções */
function Soma(x: number, y: number){
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
const result = soma2(2, 5);
console.log(result);
