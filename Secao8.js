// Promises servem para time outs 
function random(min=0, max=3){
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
/*function baixarPagina(){
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
).catch(e => console.log('ERRO:', e))*/

// ASYNC / AWAIT

/*waitForIt('Fase 1', random()).then(valor => {
    console.log(valor)
    return waitForIt('Fase 2', random())
}).then(fase => {
    console.log(fase)
    return waitForIt('Fase 3', random())
}).then(fase => {
    console.log('Terminamos na fase: ', fase)
}).catch(error => console.log(error))*/

/*async function execucao(){
    try{
    const fase1 = await waitForIt('Fase 1', random())
    console.log(fase1)
    setTimeout(function(){
        console.log('Essa promise estava pendente:', fase1)
    }, 1000)
    const fase2 = await waitForIt('Fase 2', random())
    console.log(fase2)
    const fase3 = await waitForIt('Fase 3', random())
    console.log(fase3)
    console.log('Terminamos na fase:', fase3)
} catch {
    console.log('Ihh, deu erro')
}
}
execucao()*/

const request = obj => {
    return new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest();
    // Get é para buscar um conteúdo da internet
    xhr.open(obj.method ,obj.url, true);
    xhr.send()

    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            resolve(xhr.responseText)
        } else {
            reject(xhr.statusText)
        }
    })
    })
}
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        loadPage(el);
    }
})

async function loadPage(el){
    const href = el.getAttribute('href')
    const objConfig = {
        method: 'GET',
        url: href
    }   
    try{
    const response = await request(objConfig)
    carregaResultado(response)
    } catch(e){
        console.log(e)
    }
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}