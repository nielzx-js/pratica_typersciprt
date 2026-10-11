/*
EXERCÍCIO 1 (Modelagem de Usuários / Contrato de Dados)
Crie uma interface PerfilUsuario contendo:
- readonly id: number
- nome: string
- email: string
- bio?: string (opcional)

Crie um objeto usuario1 com bio e usuario2 sem bio.
Tente alterar o id de usuario1 e observe a reação do TypeScript (deixe a linha comentada indicando o erro do compilador).
*/

interface PerfilUsuario {
    readonly id:number,
    nome:string,
    email:string,
    bio?:string
};

const usuario1:PerfilUsuario={
    id:1,
    nome:"nielson",
    email:"niel@gmail.com",
    bio:"coisas"
}

const usuario2:PerfilUsuario={
    id:2,
    nome:"niels",
    email:"s"
}
console.log(usuario1)
console.log(usuario2)