/* Tipos básicos */
let nome: string = 'Lucas'
let idade: number = 19
let adulto: boolean = true
let simbolo: symbol = Symbol('simbolos')

/* Arrays */
let ArraydeNumeros: Array<number> = [1, 4, 8, 10]
let ArraydeNumeros2: number[] = [1, 4, 8, 10]
let ArraydeStrings: Array<string> = ['Lucas', 'Neto', 'Jonatha']
let ArraydeStrings2: string[] = ['Lucas', 'Neto', 'Jonatha']

/* Objetos */
let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean
} = {
  nome: 'Lucas',
  idade: 19,
  adulto: false
}

/* Funções */
function Soma(x: number, y: number){
  return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
const result = soma2(2, 5)
console.log(result)
