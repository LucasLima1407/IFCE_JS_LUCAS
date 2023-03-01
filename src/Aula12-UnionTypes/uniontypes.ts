function add(a:number | string, b:number | string): number | string {
  if(typeof a === "number" && typeof b === "number") return a + b;
  else
    return`${a} ${b}`;
}

console.log(add(4,10));
console.log(add("4", "10"));
