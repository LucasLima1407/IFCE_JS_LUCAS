// Serve para que a classe, atributo ou objeto possa ser acessado dentro ou fora da classe por todas as suas sub-classes, caso não seja declarado nenhum modificador, ele será public automaticamente
export class Empresa {
  public readonly nome: string = "Luiz";
  private readonly colaboradores: Colaboradores[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addCollaborators(colaboradores: Colaboradores): void{
    this.colaboradores.push(colaboradores);
  }
  showCollaborators():void{
    for (const Colaboradores of this.colaboradores){
      console.log(Colaboradores);
    }
  }
}

export class Colaboradores{
  constructor(//Nesse caso a declaração do modificador é obrigatória 
    public readonly nome: string,
    public readonly sobrenome: string){}
}
// Caso seja private ele só poderá ser modificado dentro da classe, mas caso utilizemos métodos público, podemos ver e modificar valores dentro dela.
