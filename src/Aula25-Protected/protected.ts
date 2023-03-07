export class Empresa {
  public readonly nome: string = "Luiz";
  // Protected permite que a classe e seus atributos e métodos possam ser usados or suas sub-classes, diferente de private
  protected readonly colaboradores: Colaboradores[] = [];
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

export class Udemy extends Empresa {
  constructor(){
    super("Udemy", "11.111.111/-0001-11");
  }
  popColaboradores(): Colaboradores | null {
    const Colaboradores = this.colaboradores.pop();
    if(Colaboradores) return Colaboradores;
    return null;
  }
}

export class Colaboradores{
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string){}
}
const empresa1 = new Udemy();
const colaboradores1 = new Colaboradores("Lucas", "Lima");
const colaboradores2 = new Colaboradores("Neto", "Lisboa");
empresa1.addCollaborators(colaboradores1);
empresa1.addCollaborators(colaboradores2);
const delCollaborator = empresa1.popColaboradores();
console.log(delCollaborator);
