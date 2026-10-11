/*
EXERCÍCIO 5 (Discriminated Unions / Sistemas Geométricos)
Um sistema gráfico calcula áreas de diferentes formas geométricas.
Crie dois tipos:
- type Retangulo = { tag: "retangulo"; largura: number; altura: number };
- type Circulo = { tag: "circulo"; raio: number };

Crie o Union Type: type Forma = Retangulo | Circulo.
Escreva a função calcularArea(forma: Forma): number.
Afunile a verificação utilizando a propriedade tag (forma.tag === "retangulo") e calcule a área correspondente de cada forma.
*/

type Retangulo = { tag: "retangulo"; largura: number; altura: number }
type Circulo = { tag: "circulo"; raio: number }

type Forma=Retangulo | Circulo

function calcularArea(forma:Forma){
    if(forma.tag==="retangulo"){
        return `${forma.largura*forma.altura}u.a`
    }
    else{
        return `${(forma.raio**2*Math.PI).toFixed(2)}u.a`
    }
}
const meuRetangulo:Forma={
     tag: "retangulo",
     largura: 10,
     altura: 5
}
const meuCirculo:Forma={
    tag:"circulo",
    raio:5
}

console.log(calcularArea(meuRetangulo))
console.log(calcularArea(meuCirculo))