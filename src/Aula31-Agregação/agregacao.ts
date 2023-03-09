export class CarrinhoDeCompras{
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]){
    for (const produto of produtos){
      this.produtos.push(produto);
    }
  }
  quantidade(): number{
    return this.produtos.length;
  }
  valor(): number{
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto{
  constructor(public nome: string,
    public preco: number){}
}
const produto1 = new Produto("Camiseta", 50);
console.log(produto1.nome);
const produto2 = new Produto("Calça", 45);
console.log(produto2.nome);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1, produto2);

console.log(carrinho.quantidade());
console.log(carrinho.valor());
