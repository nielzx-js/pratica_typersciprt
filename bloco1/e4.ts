/*
Exercício 4 (Intermediário/Avançado - Validação Numérica Estrita)

Em estatística, a variação percentual entre dois valores V1 (inicial) e V2 (final) é dada por:
Δ% = ((V2 - V1) / V1) * 100

1. Crie a variável valorInicial com o valor 100.
2. Crie a variável valorFinal com o valor 150.
3. Crie uma variável booleana chamada isCrescimento, que será true se a variação percentual for estritamente positiva.
4. Garanta que todas as variáveis tenham tipos definidos de forma limpa, sem anotações redundantes.
*/


let valorInicial=100
let valorFinal=150

let isCrescimento:boolean;

let calculo = (((valorFinal-valorInicial)/valorInicial)*100)

if(calculo>0){
    isCrescimento=true
    console.log(isCrescimento)
}
else{
    isCrescimento=false
    console.log(isCrescimento)
}