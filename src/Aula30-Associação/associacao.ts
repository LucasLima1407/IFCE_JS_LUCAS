// Associação e inversão de ddependências
export class Escritor{
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string){
  }

  set ferramenta(ferramenta: Ferramenta | null){
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null{
    return this._ferramenta;
  }

  get nome(): string{
    return this._nome;
  }

  escrever(): void{
    if(this._ferramenta === null){
      console.log("Você não pode escrever sem ferramente");
    }
  }
}

export abstract class Ferramenta{
  constructor(private _nome: string){
  }
  abstract escrever(): void;

  get nome(){
    return this._nome;
  }
}
export class Caneta extends Ferramenta{
  escrever(): void{
    console.log(`${this.nome} está escrevendo`);
  }
}
export class Maquina_Escrever extends Ferramenta{
  escrever(): void{
    console.log(`${this.nome} está escrevendo`);
  }
}
const escritor = new Escritor("Lucas");
const caneta = new Caneta("Bic");
const maquinaEscrever = new Maquina_Escrever("Turing");

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;

escritor.escrever();
