export class Pessoa{
  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string){}

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
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string){
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log("O aluno tem nome:");
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "O cliente tem nome: " + this.nome + " " + this.sobrenome;
  }
}
const aluno = new Aluno("Lucas", "Lima", 30, "000.000.000-00", "001");
console.log(aluno.getNomeCompleto());
console.log(aluno);
