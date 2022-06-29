const nums = [1, 2, 3, 4, 5, 9, 36, 353, 369];

function somaNums(arr) {
    return arr.reduce(function(atual, valor){
        return atual + valor;
    })
}

//console.log(somaNums(nums));

//

const lista = [
    {
        nome: "Sabão",
        preco: 30
    },
    {
        nome: "Cereal",
        preco: 15
    },
    {
        nome: "Gasolina",
        preco: 7
    },
    {
        nome: "Açai",
        preco: 50
    },
];

const saldoDisponivel = 110;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce (function(saldo, atual) {
        return saldo - atual.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));