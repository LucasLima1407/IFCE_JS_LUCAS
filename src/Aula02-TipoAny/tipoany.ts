// Evitar usar any, temos que ser mais específicos 
const showMesage = (msg: any) => {
  return msg
}
console.log(showMesage([1, 4, 10]))
console.log(showMesage('Olá'))
console.log(1)
