// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code: 10,
    name: 'Jhon'
};

let funcionario: {cod: number, nome: string} = {
    cod: 20,
    nome: 'Luiz'
}

interface Employee {
    code: number,
    name: string
}

const funcionario2: Employee = {
    code: 10,
    name: 'Elizeu'
}

