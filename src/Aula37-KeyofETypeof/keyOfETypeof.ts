type CoresObj = typeof coresobj;
type CoresChaves = keyof CoresObj

const coresobj ={
  vermelho: "red",
  azul: "blue",
  verde: "green"
};

function traduzirCor(cor: CoresChaves, cores: typeof coresobj){
  return cores[cor];
}

console.log(traduzirCor("vermelho", coresobj));
console.log(traduzirCor("verde", coresobj));
