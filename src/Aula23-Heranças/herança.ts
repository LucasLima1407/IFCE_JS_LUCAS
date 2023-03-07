export class Pessoa{
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string){}

  getIdade(): number{
    return this.idade;
  }

  getCPF(): string{
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "O aluno tem nome: " + this.nome + " " + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "O cliente tem nome: " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Lucas", "Lima", 30, "000.000.000-00");
const aluno = new Aluno("Lucas", "Lima", 30, "000.000.000-00");
const cliente = new Cliente("Lucas", "Lima", 30, "000.000.000-00");

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getCPF());
