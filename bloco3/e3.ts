/*
EXERCÍCIO 3 (Processamento de Sinais / Union Literal)
Sinais de áudio digital podem ser medidos em dB (número) ou como constantes de estado: "MUTE" ou "MAX".
Crie o type NivelAudio = number | "MUTE" | "MAX".
Escreva uma função obterVolumePercentual(nivel: NivelAudio): number que:
- Se for "MUTE", retorna 0.
- Se for "MAX", retorna 100.
- Se for number, garante que o valor retornado esteja limitado entre 0 e 100.
*/

type NivelAudio=number|"MUTE"|"MAX"

function obterVolumePercentual(nivel:NivelAudio){
   if(typeof nivel==="string"){
    if(nivel==="MUTE"){
        return 0
    }
    else{
        return 100
    }
   } else{
        if(nivel>100 || nivel <0){
            return "por favor insira um valor entre 0 e 100."
        }
   }
}
console.log(obterVolumePercentual('MAX'))
console.log(obterVolumePercentual('MUTE'))
console.log(obterVolumePercentual(1000))
console.log(obterVolumePercentual(100))
console.log(obterVolumePercentual(-1))
console.log(obterVolumePercentual(0))