/*
Exercício 3 (Intermediário - Algoritmo Geométrico e Tipagem)
A fórmula da distância euclidiana entre dois pontos $(x_1, y_1)$ e $(x_2, y_2)$ no plano cartesiano é:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
*/


let x1:number;
let y1:number;
let x2:number;
let y2:number;

x1=2
y1=3
x2=6
y2=6
console.log(`
    os pontos são:
    A(${x1},${y1})
    B(${x2},${y2})    
    `)

let distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

console.log(`a distancia entre eles é: ${distancia}u.d`)