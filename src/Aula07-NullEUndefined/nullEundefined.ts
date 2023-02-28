let x;
if(typeof x === "undefined"){
  x = 20;
  console.log(x * 2);
}
export function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName
  };
}
export function squareAll(x: unknown){
  if(typeof x === "number"){
    return x * x;
  } else {
    return null;
  }
}
const squareOfTwoNumbers = squareAll(2);
if (squareOfTwoNumbers === null){
  console.log("Conta inválida");
} else {
  console.log(squareOfTwoNumbers * 100);
}
