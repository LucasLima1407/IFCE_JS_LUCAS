let x = 10;
x = 0b010;
const y = 10;

console.log(x);
console.log(y);

const pessoa2 = {
  nome: "Lucas" as const,
  sobrenome: "Lima"
};

console.log(pessoa2);

function escolhaACor(cor: "Vermelho" | "Azul" | "Verde"): string {
  return cor;
}
console.log(escolhaACor("Vermelho"));

//Module mode
export default 1;
