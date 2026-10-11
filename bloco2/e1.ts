/*
Exercício 1 (Matemática / Estatística)
Crie um type chamado Vetor2D que representa uma tupla de dois números [x, y].
Crie dois vetores desse tipo: v1 ([3, 4]) e v2 ([1, 2]).
Crie uma função curta ou cálculo que realiza a soma vetorial: $v_3 = [x_1 + x_2, y_1 + y_2]$.
Armazene o resultado em v3 garantindo que ela seja explicitamente do tipo Vetor2D.
*/

type Vetor2D=[number,number]

const v1:Vetor2D=[3,4]
const v2:Vetor2D=[1,2]

function somar(v1:Vetor2D,v2:Vetor2D):Vetor2D{
    console.log(`[${v1[0]+v2[0]},${v1[1]+v2[1]}]`)    
}
const v3=somar(v1,v2)
console.log(v3)