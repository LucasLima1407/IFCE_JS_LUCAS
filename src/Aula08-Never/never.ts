/* Never são para funções que lançam erros ou que vão acabar travando a aplicação */
function criaErro(): never {
  throw new Error("Erro");
}
criaErro();
