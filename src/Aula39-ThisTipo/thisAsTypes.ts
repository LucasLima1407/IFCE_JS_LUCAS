export class Calculadora {
  constructor(public numero: number){}

  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  mul(n: number): this {
    this.numero *= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

//Se retornarmos this, podemos fazer chamadas em cadeia
const calc= new SubCalculadora(10);
console.log(calc.add(5).mul(2).div(3).sub(2).pow(2));

// Builder
export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this{
    this.method = method;
    return this;
  }
  setURL(url: string): this{
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setURL("http://google.com").setMethod("get").send();
