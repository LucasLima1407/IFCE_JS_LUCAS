// Promises servem para time outs 
function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function waitForIt(msg, tempo){
    /* Resolve é para resolver suas promessas em partes do código que irão demorar, reject já vai p/ o 
    catch */return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
    setTimeout(() => {
        resolve(msg);
    }, tempo)
});
}
// Catchs sempre são para capturar erros
waitForIt('Conectado ao BD', random(1,3)).then(resposta => {
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
})