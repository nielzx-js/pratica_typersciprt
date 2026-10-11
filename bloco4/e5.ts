/*
EXERCÍCIO 5 (Composição Complexa de Interfaces / Engenharia de Software)
Crie uma interface PontoGrafico contendo:
- readonly x: number
- readonly y: number

Crie uma interface LinhaGrafica contendo:
- inicio: PontoGrafico
- fim: PontoGrafico
- rotulo?: string (opcional)

Escreva uma função calcularComprimentoLinha(linha: LinhaGrafica): number que calcula a distância euclidiana entre os pontos inicio e fim.
Aponte no comentário porque os pontos x e y serem readonly ajuda na consistência do cálculo.
*/

interface PontoGrafico{
    readonly x: number,
    readonly y: number
}
interface LinhaGrafica{
    inicio:PontoGrafico,
    fim:PontoGrafico,
    rotulo?:string
}
function calcularComprimentoLinha(linha:LinhaGrafica){
    let dx=linha.fim.x -linha.inicio.x
    let dy = linha.fim.y-linha.inicio.y
    let d=Math.sqrt(dx**2+dy**2)
    return d


    //mantém a coordenada da devida maneira, sem alterar.
}


const linha1: LinhaGrafica = {
    inicio: { x: 0, y: 0 },
    fim: { x: 3, y: 4 }
};

const linha2: LinhaGrafica = {
    inicio: { x: 1, y: 1 },
    fim: { x: 1, y: 6 },
    rotulo: "linha vertical"
};

const linha3: LinhaGrafica = {
    inicio: { x: -2, y: -3 },
    fim: { x: 2, y: 0 },
    rotulo: "linha com coordenadas negativas"
};

const linha4: LinhaGrafica = {
    inicio: { x: 5, y: 5 },
    fim: { x: 5, y: 5 }
};

console.log(calcularComprimentoLinha(linha1));
console.log(calcularComprimentoLinha(linha2));
console.log(calcularComprimentoLinha(linha3));
console.log(calcularComprimentoLinha(linha4));