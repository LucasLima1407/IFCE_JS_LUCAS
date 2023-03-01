// Type alias são tipos que você mesmo cria
type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  corFavorita?: CorPreferida;
};
type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";

type CorPreferida = CorCMYK | CorRGB
const pessoa3: Pessoa = {
  idade: 30,
  nome: "Lucas",
  salario: 2200,
  corFavorita:"Azul"
};
export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
  return {...pessoa, corFavorita: cor};
}
console.log(setCorPreferida(pessoa3, "Vermelho"));
console.log(pessoa3);
