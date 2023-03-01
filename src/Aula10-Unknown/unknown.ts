/* É similar ao any, oprém mais utilizado pois os unknows podem ser checados */
let x: unknown;

x = 100;
x = "10";
x = 900;

const y = 250;

if (typeof x === "number") console.log(x + y);
