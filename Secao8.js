// Promises servem para time outs 
function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function waitForIt(msg, tempo){
    /* Resolve é para resolver suas promessas em partes do código que irão demorar, reject já vai p/ o 
    catch */return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
        reject('BAD VALUE')
        return
    }
    
    setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return
    }, tempo)
});
}
// Catchs sempre são para capturar erros
/*waitForIt('Conectado ao BD', random(1,3)).then(resposta => {
    console.log(resposta)
    return waitForIt('Buscando dados no BD', random(1,3));
}).then(resposta => {
    console.log(resposta); 
    return (waitForIt(22222, random(1, 3)))
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibindo dados na tela')
}).catch(e => {
    console.log('ERRO:', e)
})*/

// MÉTODOS PROMISE
//Promise.all Promise.race Promise.resolve Promisse.reject

const promises = [
    waitForIt('Promise 2', 3000),
    waitForIt('Promise 3', 5000),
    waitForIt('Promise 1', 1000),
    //waitForIt(1000, 1000),
]
// Executa todas as promisses e coloca em ordem normalmente caso uma dê erro, não retorna
/*Promise.all(promises).then((valor => {
    console.log(valor)
})).catch((erro => {
    console.log(erro)
}))*/

// Retorna a primeira promise que foi resolvida se for um erro, vai retornar ele
/*Promise.race(promises).then((valor => {
    console.log(valor)
})).catch((erro => {
    console.log(erro)
}))*/


// Promise.resolve é utilizado para promises que nunca irão dar erros 
/*function baixarPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('A página está em cache')
    } else {
        return waitForIt('Baixei a página', 3000)
    }
}

baixarPagina().then(
    dadosPagina => {
        console.log(dadosPagina)
    }
).catch(e => console.log('ERRO:', e))*/

// Promise.reject são promises que sempre irão retornar erros
function baixarPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('A página está em cache')
    } else {
        return waitForIt('Baixei a página', 3000)
    }
}

baixarPagina().then(
    dadosPagina => {
        console.log(dadosPagina)
    }
).catch(e => console.log('ERRO:', e))