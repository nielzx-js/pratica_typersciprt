/*

Crie um type chamado Transacao contendo descricao: string e valor: number (valores positivos para receita, negativos para despesa).
Crie um array de transações extrato: Transacao[] com pelo menos 4 itens (ex: vendas e pagamentos de contas).
Escreva um algoritmo utilizando métodos de array do JS (como .reduce() ou um loop for...of) para calcular o saldo final. 
Imprima o saldo no console.

*/

type transacao={
    descricao:string,
    valor:number
}
const vendas:transacao={
    descricao:"sabonete",
    valor:10
}
const pagamentos:transacao={
    descricao:"Exemplo",
    valor:-40
}
const dividendos:transacao={
     descricao:"Exemplo",
    valor:50
}
const emprestimos:transacao={
     descricao:"Exemplo",
    valor:10
}

let Transacao=[vendas,pagamentos,dividendos,emprestimos]

let total=0
for(const produto of Transacao){
   total+=produto.valor
}
console.log(total)
