// Criar classes também é criar um tipo
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
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string){}
}
const empresa1 = new Empresa("Udemy", "11.111.111/-0001-11");
const colaboradores1 = new Colaboradores("Lucas", "Lima");
const colaboradores2 = new Colaboradores("Neto", "Lisboa");
empresa1.addCollaborators(colaboradores1);
empresa1.addCollaborators(colaboradores2);
console.log(empresa1);
empresa1.showCollaborators();
