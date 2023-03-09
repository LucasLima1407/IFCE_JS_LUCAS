// Interface propriamente dita
interface TipoPessoa{
  nome: string
  sobrenome: string

 nomeCompleto(): string
}
//Type alias servindo como interface
//type Numero = number | string

type TipoPessoa2 = TipoPessoa

export class Pessoa implements TipoPessoa2{
  constructor(public nome: string,
 public sobrenome: string) {}

  nomeCompleto(): string{
    return this.nome + " " + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto(){
    return this.nome + " " + this.sobrenome;
  },
  nome: "Lucas",
  sobrenome: "Lima"
};

const pessoa = new Pessoa("Lucas", "Lima");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
