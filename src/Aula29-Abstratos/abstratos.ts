// Atributos e métodos abstratos precisam ser implementados por outras
export abstract class Personagem{
  protected abstract emoji: string

  constructor(protected nome: string,
    protected ataque: number,
    protected vida: number,)
  {}
  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(força: number):void{
    this.vida -= força;
    console.log(`-${this.emoji} ${this.nome} agora tem ${this.vida} de vida`);
  }
  abstract bordao(): void;
}

export class Guerreira extends Personagem{
  protected emoji = "\u{1F9DD}";
  bordao(): void{
    console.log(this.emoji + " Morra!");
  }
}
export class Monstro extends Personagem{
  protected emoji = "\u{1F9DF}";
  bordao(){
    console.log(this.emoji + " Petrificar!");
  }

}
const warrior = new Guerreira("Alice", 100, 1000);
const inimigo = new Monstro("Beholder", 87, 1000);

warrior.atacar(inimigo);
warrior.atacar(inimigo);
warrior.atacar(inimigo);
inimigo.atacar(warrior);
