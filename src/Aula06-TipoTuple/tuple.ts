/* Tuplas são arrays de tamanhos imutáveiis e que podem armazenar vários tipos de varáveis já definidos */
const dadosCliente1: readonly [number, string] = [1, 'Lucas']
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Lima']
const dadosCliente3: [number, string, string?] = [1, 'Lucas']
const dadosCliente4: [number, string, ...string[]] = [1, 'Lucas', 'Lima']

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)
