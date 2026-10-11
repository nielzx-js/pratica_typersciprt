/*
EXERCÍCIO 2 (Herança de Contratos Geométricos)
Crie uma interface FiguraGeometrica contendo:
- readonly id: string
- cor: string

Crie uma interface PoligonoRegular que herda (extends) de FiguraGeometrica e adiciona:
- quantidadeLados: number
- tamanhoLado: number

Crie uma função calcularPerimetro(poligono: PoligonoRegular): number que retorna o perímetro do polígono.
*/

interface FiguraGeometrica{
    readonly id:string,
    cor:string
}
 
interface PoligonoRegular extends FiguraGeometrica{
    quantidadeLados:number,
    tamanholado:number
}

function calcular(poligono:PoligonoRegular){
    return poligono.quantidadeLados*poligono.tamanholado
}

const meuPoli:PoligonoRegular={
    id: "poligono-1",
    cor: "azul",
    quantidadeLados: 5,
    tamanholado: 10
}
console.log(calcular(meuPoli))