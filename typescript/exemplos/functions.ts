type input = number | string;

function somarNumeros(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}

console.log(somarNumeros(2, 6));
console.log(somarNumeros('ola, ', 'tudo bem?'));
console.log(somarNumeros(2, '4'));

function somarValoresNumericos(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado (numero: number): number {
    return numero ** 2;
}

function dividePorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericos(2, 4, aoQuadrado));
console.log(somarValoresNumericos(1, 3, dividePorEleMesmo));