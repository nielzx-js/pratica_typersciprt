/*
Exercício 3 (Geometria Analítica)
Crie um type chamado Ponto2D com as propriedades x: number e y: number.
Crie um type chamado Circulo com as propriedades centro: Ponto2D (um objeto aninhado) e raio: number.
Declare um objeto meuCirculo. Em seguida, crie um cálculo que verifica se o ponto (3, 4) está dentro ou fora da área do círculo
(considerando o centro em (0, 0) e raio 5). Armazene essa resposta em uma variável booleana isPontoDentro.
(Dica: Um ponto está dentro do círculo se a distância dele ao centro for menor ou igual ao raio).
*/


let x = 3
let y = 4
let raio=Math.sqrt(x**2 + y ** 2)
// tendo em vista que a formula pra saber o raio eh a raiz quadrada de x² + y ² quando o centro for (0,0)

let distancia=Math.sqrt((x**2 - 0 **2) + (y**2 - 0**2))
//distancia do (3,4) ao centro que eh (0,0)


type Ponto2D={
    x:number,
    y:number
}

type Circulo={
    centro:Ponto2D,
    raio:number
}

let isPontoDentro:boolean;

if(distancia<=raio){
    isPontoDentro=true
    console.log(isPontoDentro)
}
else{
    isPontoDentro=false
    console.log(isPontoDentro)
}
