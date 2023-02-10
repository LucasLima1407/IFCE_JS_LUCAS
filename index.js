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
console.log(lancamentosTotal)

function reduceMao(lancamentos){
    for(i = 0; i < rockets.length; i++){
        valPost = rockets[i+1]
        return lancamentos + valPost
    }
}
const totaLancamentos = rockets.reduce(reduceMao)
console.log(totaLancamentos) 