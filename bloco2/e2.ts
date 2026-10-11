/*
Exercício 2 (Estrutura de Dados / Algoritmos)
Crie um type chamado AmostraEstatistica contendo:

rotulo: string

valores: array de números (number[])

Declare um objeto experimento desse tipo com os valores [10, 20, 30, 40].
Calcule a média aritmética dos elementos do array valores acessando-o através do objeto experimento e imprima a média no console.
*/

type AmostraEstatistica={
    rotulo:string,
    valores:number[]
}

const experimento:AmostraEstatistica={
    rotulo:"experimento",
    valores:[10,20,30,40]
}
console.log(`valores recebido: ${experimento.valores}`)
 let valorInicial=0
for(let i = 0;i<experimento.valores.length;i++){
    valorInicial += experimento.valores[i]
}
console.log(`a média aritmétrica entre eles é: ${valorInicial / experimento.valores.length}`)
