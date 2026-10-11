/*
EXERCÍCIO 5 (Processamento de Matrizes)
Em matemática, uma matriz 2x2 pode ser representada como um array de tuplas numéricas.
Crie um type chamado Matriz2x2 definido como uma tupla contendo duas tuplas: [[number, number], [number, number]].
Declare a matriz M = [[2, 3], [1, 4]].
Calcule o determinante da matriz det(M) = (a * d) - (b * c) extraindo os valores das posições da tupla e exiba o resultado.
*/
type matriz=[[number,number],[number,number]]
const M:matriz=[[2,3],[1,4]]

let detM=M[0][0]*M[1][1] - M[0][1] * M[1][0]

console.log(detM)