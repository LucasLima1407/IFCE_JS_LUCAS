// Declarartion merging é quando 2 interfaces de mesmo nome declaradas separadamente acabam se unindo
interface Pessoas{
  nome: string
}

interface Pessoas{
  sobrenome: string
}

interface Pessoas{
  readonly enderecos: string[]
}

const pessoa5: Pessoas = {
  nome: "Lucas",
  sobrenome: "Lima",
  enderecos: ["Av. Brasil"]
};
pessoa5.enderecos.push("Rua Paulo Frontin");
console.log(pessoa5);

