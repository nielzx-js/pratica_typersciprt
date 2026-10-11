/*
EXERCÍCIO 4 (Afunilamento de Propriedades Opcionais)
Crie uma interface MedicaoSensor contendo:
- timestamp: number
- pressao: number
- temperatura?: number (opcional)

Escreva uma função analisarSensor(medicao: MedicaoSensor): string que:
- Se temperatura estiver presente, retorna: "Pressão: X | Temp: Y"
- Se temperatura for undefined, retorna: "Pressão: X | Temp: Indisponível"
Use afunilamento de tipo (if/else ou operador ternário) para lidar com a propriedade opcional com segurança.
*/

interface MedicaoSensor{
    timestamp:number,
    pressao:number,
    temperatura?:number
}

function analisarSensor(medicao:MedicaoSensor){
    if(typeof medicao.temperatura==="number"){
        return `Pressão: ${medicao.pressao} | Temp: ${medicao.temperatura}`
    }
    else{
         return `Pressão: ${medicao.pressao} | Temp: indisponível`
    }
}
const medico:MedicaoSensor={
    timestamp:10,
    pressao:20,
    temperatura:15
}
const medico1:MedicaoSensor={
    timestamp:100,
    pressao:200
}

console.log(analisarSensor(medico))
console.log(analisarSensor(medico1))