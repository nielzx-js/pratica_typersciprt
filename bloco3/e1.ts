
/*
EXERCÍCIO 1 (Afunilamento Matemático)
Crie um type EntradaNum = number | string.
Escreva uma função dobrarValor(valor: EntradaNum): number que:
- Se for number, retorna o dobro do número.
- Se for string, converte a string para número e retorna o dobro.
(Dica: Use typeof para afunilar).
*/

type EntradaNum=number|string

function dobrar(valor:EntradaNum){
    if(typeof valor==="string"){
        let num=Number(valor)
        return num * 2
    }
    else{
        return valor * 2
    }
}
console.log(dobrar(3))
console.log(dobrar("5"))