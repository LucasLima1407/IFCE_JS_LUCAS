/*Função Map*/
/*Serve para mapear e traduzir as informações que estão dentro de um Array*/

const numbers = [1, 3, 4, 19, 41]
/*Dobrando normalmente*/ 
function dobrarNumeros(value){
    return value * 2
}
const numerosDobrados = numbers.map(dobrarNumeros)
//console.log(numerosDobrados)

/*Dobrando usando arrow function*/ 
const doubleNumbers = numbers.map(num => num * 2)
//console.log( doubleNumbers ) 

/* Transformando Fahrenheit em graus celsius */
const fahrenheit = [0, 45, 80 , 120, 212]

/* Usando uma função normal */
function Convertendo(value){
    return Math.round((value - 32) * 5/9)
}

const ohCelsius = fahrenheit.map(Convertendo)
//console.log(ohCelsius)

/* Usando Arrow Functions */
const celsius = fahrenheit.map( num => (Math.round( ( num - 32 ) * 5/9 ) ) )
//console.log(celsius)

/* Função Filter */
/* Serve para remover certos elementos com base em condições que você irá dar */

const outroArray = [1, 5 ,6 , 7, 25, 32, 5, 6, 7]
//console.log(outroArray)

const filtroArray = outroArray.filter((elem, index, arr) => arr.indexOf( elem ) == index)
//console.log(filtroArray)

/*function buscarPares(value){
    if(value % 2 == 0){
        return value;
    }
}*/

const numerosPares = outroArray.filter(pares => (pares % 2 == 0))
//console.log(numerosPares)

/*function buscarPares(value){
    if(value % 2 != 0){
        return value;
    }
}*/

const numerosImpares = outroArray.filter(impares => (impares % 2 != 0))
//console.log(numerosImpares)

/* Função reduce */
/* Ele concatena os objetos do array para formar um iteem final que engloba todos com base no parametro passado */

const rockets = [
    {pais: 'Russia', lancamentos: 32},
    {pais: 'Japan', lancamentos: 3},
    {pais: 'USA', lancamentos: 23}
]

/* Utilizando arrow function */
const lancamentosTotal = rockets.reduce( (valAnt, elem) => valAnt + elem.lancamentos, 0 )
//console.log(lancamentosTotal)

/* Juntando as funções MAP, FILTER E REDUCE */
const numeros = [1, 3, 5, 6, 8, 54, 68]
// Filtrar os pares
const filteredNumbers = numeros.filter(num => (num % 2 == 0))
//console.log(filteredNumbers)
// Retornar o dobro dos pares
const doubleFilteredNumbers = filteredNumbers.map(num => (num * 2))
//console.log(doubleFilteredNumbers)
// Reduzir (somando tudo)
const oneNumber = doubleFilteredNumbers.reduce((valAnt, num) => valAnt + num, 0)
//console.log(oneNumber)

/* DIFERENÇA DE UMA ARROW FUNCTION E UMA FUNÇÃO NORMAL */
// Arrow functions são funções anônimas utilizadas geralmente para callback
const cidades = [
    'Delaware',
    'Seattle',
    'Washington',
    'Nova York'
]

const tamanho = cidades.map(cidades => cidades.length)
//console.log(tamanho)


/* ORIENTAÇÃO A OBJETOS EM JS */
// Um objeto é formado por uma par, chaves e valor 
const pessoa = {
    nome : 'Lucas', 
    sobrenome : 'Lima',
    idade : 19
}
//console.log('Olá, eu sou ' + pessoa.nome)
//console.log('Meu sobrenome é ' + pessoa.sobrenome + ', prazer')

//Utilizamos com colchetes caso queíramos acessar dinamicamente um atributo
//const chave = 'nome'
//console.log(pessoa[chave])

//Também podemos fazer isso utilizando construtores
/*const pessoa1 = new Object()
pessoa1.nome = 'Lucas'
pessoa1.sobrenome = 'Lima'
pessoa1.idade = 19
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome`) 
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - pessoa1.idade
}*/
//console.log(pessoa1.nome)
//console.log(pessoa1.sobrenome)
//console.log('tenho ' + pessoa1.idade + ' anos')

// A função dele serve para excluir um atributo
//delete pessoa1.nome
//console.log(pessoa, pessoa1)
//console.log(pessoa1.getDataNascimento())

/*for (let chave in pessoa1){
    console.log(pessoa1[chave])
}*/

 // Factory Function

 function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}` 
        }
    }
 }

 const pessoa1 = criaPessoa('Lucas', 'Lima')
 //console.log(pessoa1.nomeCompleto)

 // Constructor function
 function Pessoa(nome, sobrenome){
    this.nome = nome 
    this.sobrenome = sobrenome

} 

 /*Observa-se que ele mostra qual construtor criou aquela forma, new cria um objeto vazio e usa os this para determinar
  os atributos, ao usar this podemos atrelar a várias pessoas*/
/* const p1 = new Pessoa('Lucas', 'Lima')
const p2 = new Pessoa('Clara', 'Savallas')
 console.log(p1)
 console.log(p2)*/

 function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    /* Usado para definir um atributo ou atributos dando propriedades da forma como você deseja, por exemplo se é possível
    ler ou não */
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra o atributo 
        // value: estoque,  Determina o valor
        // writable: true,  Diz se ele pode ou não ser alterado
        configurable: true, // Se ele é deletável ou não
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Digite um valor')
            } else {
                estoque = valor
            }
        }
    })
 }

 //const p1 = new Produto('Camisa', 25, 10)
 // ... Serve para criar objetos baseados em outros
 //const p2 = {...p1, material: 'porcelana'}
 // Object.assign funciona de forma similar
 //const p3 = Object.assign({}, p1, {material: 'Algodão'})
 //console.log(p1)
 // Object.keys joga as chaves (atributos do objeto)
 //console.log(Object.keys(p1))
 //Object.freeze impede alterações em objetos
 //p2.nome = 'Chocolate'
 //p2.preco = 5.00
 //p2.estoque = 200
 // Mostra as definições de property daquele atributo do objeto
 //console.log(Object.getOwnPropertyDescriptor(p1, 'nome'))
 // Object.values mostra os valores dentro das chaves do objeto
 //for(let valor of Object.entries(p1) ){
 //console.log(valor[0] + ': ' + valor[1])
 //}
 // Object.entries mostra o nome do atributo e seu valor em um array
 //console.log(p2)
 //console.log(p3)

 // Prototypes
 // Protótipo é algo que foi criado pela primeira vez e irá servir de molde para futuras criações
 function Person(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
 }
 Person.prototype.nomeCompleto = function(){ 
    return (this.nome + ' ' + this.sobrenome)
 }
 const p1 = new Person('Lucas', 'Lima')
 const data = new Date()
 //console.dir(p1)
 //console.dir(p1.nomeCompleto())
 //console.dir(data.toLocaleDateString())

 //Chamando automaticamente New Object -> Object.prototype
 /*const objA = {
    chaveA: 'A',
 }*/
 /*const objB = {
    chaveB: 'B',
 }
 // Setando que ObjA é prótotipo do ObjB
 Object.setPrototypeOf(objB, objA)
 console.log(objB.chaveA)*/

 function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
 }

 Produto.prototype.Desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
 }

 Produto.prototype.Aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
 }

 /*const ProdutoA = new Produto('café', 20)
 ProdutoA.Desconto(90)

 const ProdutoB = {
    nome: 'caneca',
    preco: 15
 }
 Object.setPrototypeOf(ProdutoB, Produto.prototype)
ProdutoB.Desconto(75)*/
 //Chamamos o prótotipo fora do console.log ou ele irá retornar undefined
 /*console.log(ProdutoA)
 console.log(ProdutoB)*/

 /*const ProdutoC = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        enumerable: true,
        enumerable: true,
        value: 'Canela'
    },
    preco: {
        writable: true,
        enumerable: true,
        enumerable: true,
        value: 5
    }
 })
 ProdutoC.Desconto(50)
 console.log(ProdutoC)*/

 // HERANÇAS

 /*function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
 }
 // Serve para passar os prototypes da função PAI
 Caneca.prototype = Object.create(Produto.prototype)
 function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
 }
 // Serve para passar os prototypes da função PAI
Camiseta.prototype = Object.create(Produto.prototype)

const c1 = new Camiseta('Bransk', 50, 'Cinza')
const c2 = new Caneca('Nescau', 15, 'porcelana')
 c1.Aumento(75)
 c2.Aumento(35)
 console.log(c1)
 console.log(c2)*/

 function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta 
    this.saldo = saldo
 }

 Conta.prototype.Sacar = function(valor){
    if(this.saldo < valor) {
        throw new TypeError('Você tem menos dinheiro do que o desejado na sua conta')
    }
    this.saldo -= valor 
    this.verSaldo()
 }

 Conta.prototype.Depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
 }

 Conta.prototype.verSaldo = function(){
    console.log(`Agência:${this.agencia}, Conta:${this.conta}, ` + 
    `Saldo:R$${this.saldo.toFixed(2)}`)
 }

 const conta1 = new Conta('Nubank', '001', 500)
 conta1.Depositar(200)
 conta1.Sacar(600)

 function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
 }

 ContaCorrente.prototype = Object.create(Conta.prototype)
 ContaCorrente.prototype.constructor = ContaCorrente;

 ContaCorrente.prototype.Sacar = function(valor){
    if((this.saldo + this.limite) < valor) {
        throw new TypeError('Você tem menos limite do que o desejado na sua conta')
    }
    this.saldo -= valor 
    this.verSaldo()
 }

 const conta2 = new ContaCorrente('Nubank', '002', 500, 50)
 conta2.Sacar(550)