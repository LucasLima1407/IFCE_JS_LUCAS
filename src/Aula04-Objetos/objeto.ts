const objeto1: {
  /* readonly impede de o atributo ser alterado */
  readonly chaveA: string,
  chaveB: string,
  chaveC?: string,
  /* Você usa para quando for instanciar atributos novos sem precisar configurá-los */
  [key: string]: any
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
}
objeto1.chaveD = 'Valor D'

console.log(objeto1.chaveD)
