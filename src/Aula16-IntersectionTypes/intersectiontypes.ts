type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemIdade & TemNome & TemSobrenome

type AB = "A" | "B"
type AC = "A" | "C"
type AD = "A" | "D"

type interseccao = AB & AC & AD

const pessoa4: Pessoa = {
  nome: "Lucas",
  sobrenome: "Lima",
  idade: 19
};

console.log(pessoa4);

export { pessoa4 };
