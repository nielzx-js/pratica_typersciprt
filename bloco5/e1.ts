/*
EXERCÍCIO 1 (Callbacks / Processamento Numérico)
Crie o type MapeadorNum = (val: number) => number.
Escreva a função aplicarMapeamento(vetor: number[], fn: MapeadorNum): number[] que:
- Recebe um array de números e uma função de mapeamento.
- Aplica a função fn a cada elemento do vetor e retorna um novo array com os resultados.
Testes: passe uma função que eleva ao quadrado e outra que divide por 2.
*/

type MapeadorNum = (val:number)=> number
function aplicarMapeamento(vetor: number[], fn: MapeadorNum): number[] {
    return vetor.map(fn)
}
const numeros = [2, 4, 6, 8]
console.log(aplicarMapeamento(numeros, n => n ** 2))
console.log(aplicarMapeamento(numeros, n => n / 2))