const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];
const outroteste = [30, 80, 90, 90, 90, 3, 6, 3, 8, 71, 52, 63, 52, 325];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

//console.log(valoresUnicos(myArr));

function meusValores(valores){
    const meu = new Set(valores);

    return [...meu];
}




console.log(meusValores(outroteste));
