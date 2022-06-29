// Como podemos melhorar o esse código usando TS? 
interface Pessoa {
    nome: string,
    idade: number
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro,
    Pedreiro,
    Desenvolvedor
}

let pessoa1: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Pedreiro
}