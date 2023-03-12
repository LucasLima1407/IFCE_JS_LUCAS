type Documento = {
  titulo: string,
  texto: string,
  data?: Date
}

const documento: Documento = {
  titulo: "CNH",
  texto: "Carteira Nacional de Habilitação",
  // data: new Date()
};

// ?? é o operador de coalescência nula, caso seja null ou undefined ele irá executar o que vier após ele
console.log(documento.data?.toDateString() ?? "1-Eita, não existe data");
console.log(undefined ?? "2-Eita, não existe data");
console.log(null ?? "3-Eita, não existe data");

