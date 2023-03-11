function add(a: unknown, b: unknown): number | string{
  if(typeof a === "number" && typeof b === "number") return a + b;
  return `${a} ${b}`;
}

console.log(add(1, 10));
console.log(add("a","b"));

type Pessoa = {tipo: "pessoa", nome: string};
type Animal = {tipo: "animal", cor: string};

type PessoaOuAnimal = Pessoa | Animal

class Aluno implements Pessoa {
  tipo = "pessoa" as const;
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void{
  //if("nome" in obj) ou
  //if(obj instanceof Aluno) ou
  switch(obj.tipo){
  case "pessoa":
    console.log(obj.nome);
    return;
  case "animal":
    console.log(obj.cor);
    return;
  }
}

mostraNome(new Aluno("Lucas"));
mostraNome({tipo: "animal", cor: "Rosa"});
