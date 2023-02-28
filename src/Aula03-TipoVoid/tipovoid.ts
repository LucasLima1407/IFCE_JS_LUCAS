/* Tipo void vai fazer com que a função não retorne nada, então retornará undefined */
const semRetorno = (): void => {
  console.log()
}
/* Já como método ela irá retornar nromalmente */
const pessoa1 = {
  nome: 'Lucas',

  exibir(): void {
    console.log(this.nome)
  }
}
console.log(semRetorno())
pessoa1.exibir()
