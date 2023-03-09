export class Pessoa{
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ){}

  set Nome(valor: string){
    this.nome = valor;
  }

  get Nome(): string{
    return this.nome;
  }

  get Idade(): number{
    return this.idade;
  }

  get CPF(): string{
    return this.cpf;
  }

  get NomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
const pessoa1 = new Pessoa("Lucas", "Lima", 19, "000.000.000-00");
pessoa1.Nome = "Jonatha";
console.log(pessoa1.Nome);
console.log(pessoa1.CPF);
