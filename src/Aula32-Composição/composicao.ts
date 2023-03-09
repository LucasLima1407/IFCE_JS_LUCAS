export class Carro{
  private readonly motor = new Motor();

  ligar(): void{
    this.motor.ligar();
  }

  acelerar(): void{
    this.motor.acelerar();
  }

  desacelerar(): void{
    this.motor.desacelerar();
  }

  desligar(): void{
    this.motor.desligar();
  }
}

export class Motor{
  ligar(): void{
    console.log("O motor ligou");
  }

  acelerar(): void{
    console.log("O motor acelerou");
  }

  desacelerar(): void{
    console.log("O motor desacelerou");
  }

  desligar(): void{
    console.log("O motor desligou");
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
