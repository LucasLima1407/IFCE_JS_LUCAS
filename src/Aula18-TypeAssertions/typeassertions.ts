//Você pode ir funilando para que o ts reconheça que determinado elemento existe
/* Recomendado */
//Condicional
const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";

//Type asssertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

/* Não recomendado*/
//Type assertion "errada", não podemos fzr direto o as number, então usamos unknown primeiro
const body4 = document.querySelector("body") as unknown as number;
console.log(body4);

// Non-null assertion
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body2 = document.querySelector("body")!;
if (body2) body2.style.background = "red";

