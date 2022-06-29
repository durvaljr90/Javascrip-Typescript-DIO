const pessoa = {
    nome: 'Mariana', 
    idade: 25,
    profissao: 'Desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 30,
    profissao: 'Pintor'
}

enum Profissao {
    Professora, 
    Desenvolvedora, 
    Pintora, 
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao // com o ponto de interrogação o parametro deixa de ser obrigatório;
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 21,
    profissao: Profissao.Professora
}

interface Estudante extends Pessoa {
    materias: string[]
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 25,
    profissao: Profissao.Desenvolvedora,
    materias: ['programação', 'matemática', 'estatistica']
}



