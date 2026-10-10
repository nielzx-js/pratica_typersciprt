/* Você recebe uma temperatura lida em String vinda de um sensor de hardware: "36.6".
Crie uma variável explícita do tipo number chamada temperaturaCelsius e atribua a ela a conversão matemática da string do sensor. 
Em seguida, crie uma variável boolean temFebre que avalia se a temperatura é maior ou igual a 37.5
*/

let temperatura:string="37.5"
let temperaturaCelsius:number=Number(temperatura)
let temFebre:boolean = temperaturaCelsius>=37.5
console.log(temFebre)