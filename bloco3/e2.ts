/*
EXERCÍCIO 2 (Composição de Modelos com Intersection)
Crie o type Ponto2D = { x: number; y: number }.
Crie o type Elevação = { z: number }.
Crie o type Ponto3D unindo os dois tipos anteriores via Intersection (&).
Declare um objeto pontoGeografico do tipo Ponto3D com coordenadas de sua escolha e crie um cálculo que soma x + y + z.
*/

type ponto2d={x:number,y:number}
type elevacao={z:number}

type ponto3d=ponto2d&elevacao

let pontoGeografico:ponto3d={
    x:10,
    y:10,
    z:5
}

console.log(pontoGeografico.x+pontoGeografico.y+pontoGeografico.z)