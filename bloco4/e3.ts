/*
EXERCÍCIO 3 (Modelagem de Sistema Bancário / Imutabilidade)
Crie uma interface ContaBancaria contendo:
- readonly numeroConta: string
- readonly titular: string
- saldo: number

Crie uma função depositar(conta: ContaBancaria, valor: number): number que:
- Impede depósitos negativos ou nulos (retorna o saldo atual sem alterar).
- Aumenta o saldo caso o valor seja válido e retorna o novo saldo.
Certifique-se de que numeroConta e titular nunca possam ser modificados diretamente.
*/

interface ContaBancaria {
    readonly numeroConta:string,
    readonly titular:string,
    saldo:number
}

function depositar(conta:ContaBancaria,valor:number){
    if(valor===0 || valor < 0){
        return conta.saldo
    }
    else{
        conta.saldo=conta.saldo+valor
        return conta.saldo
       
    }
}
const myconta:ContaBancaria={
    numeroConta:'123',
    titular:"eu",
    saldo:10
}

console.log(depositar(myconta,10))
