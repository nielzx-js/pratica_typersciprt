/*
EXERCÍCIO 4 (Estatística e Afunilamento de Estruturas)
Uma entrada de dados estatísticos pode vir como um valor único (number) ou como um conjunto de valores (number[]).
Crie o type EntradaEstatistica = number | number[].
Escreva uma função calcularAmplitude(dados: EntradaEstatistica): number que calcula a amplitude (valorMaximo - valorMinimo):
- Se for um valor único (number), a amplitude é 0.
- Se for um array de números, calcule e retorne a diferença entre o maior e o menor elemento.
(Dica: Para verificar se é um array em JS/TS, use Array.isArray(dados)).
*/

type Entrada=number | number[]

function calcularAmplitude(dados:Entrada){
    if(Array.isArray(dados)){
        let maior=Math.max(...dados)
        let menor=Math.min(...dados)
        return maior + menor
    }
    else{
        return 0
    }
}
console.log(calcularAmplitude([1,2,3,4,5,6]))
console.log(calcularAmplitude(1))
