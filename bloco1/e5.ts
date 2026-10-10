/*
No JavaScript/TypeScript, existe um valor de limite seguro para inteiros (Number.MAX_SAFE_INTEGER).
Declare uma variável limiteSeguro atribuindo esse valor nativo.
Crie uma variável proximoValor somando 2 a limiteSeguro.
Declare uma variável boolean isPrecisaoPerdida que compara se proximoValor é exatamente igual a limiteSeguro + 1 ou não. 
Observe como o TypeScript reage ao lidar com esses tipos numéricos primitivos.
*/

let limiteSeguro=Number.MAX_SAFE_INTEGER
let proximoValor=limiteSeguro+2

let isPrecisaoPerdida:boolean;

if(proximoValor===limiteSeguro+1){
isPrecisaoPerdida=false
console.log(isPrecisaoPerdida)
}
else{
  isPrecisaoPerdida=true
console.log(isPrecisaoPerdida) 
}
