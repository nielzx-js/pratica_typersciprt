/*
EXERCÍCIO 2 (Tratamento Rígido de Erros e Retorno Never)
Escreva uma função validarIndiceMatriz(linha: number, coluna: number, totalLinhas: number, totalColunas: number): void que:
- Lança um Error contendo uma mensagem explicativa caso 'linha' ou 'coluna' estejam fora dos limites válidos (índices negativos ou maiores/iguais ao total).
- Se lançar o erro, crie uma função auxiliar reportarErroFatal(msg: string): never que é responsável por lançar a exceção.
*/
function reportarErroFatal(msg: string): never {
    throw new Error(msg)
}

function validarIndiceMatriz(linha:number,coluna:number,totalLinhas:number,totalColunas:number) : void{
    if(linha<0 || linha >=totalLinhas){
        reportarErroFatal("Índice da linha fora dos limites da matriz.")
    }
     if (coluna < 0 || coluna >= totalColunas) {
        reportarErroFatal("Índice da coluna fora dos limites da matriz.")
    }
}
validarIndiceMatriz(1, 2, 3, 4)
validarIndiceMatriz(-1, 2, 3, 4)
validarIndiceMatriz(1, 4, 3, 4) 
