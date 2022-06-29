let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let devePrintar = true;
let frase = 'O valor é ';

function adcionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            adcionarNumeros(Number(input1.value) , Number(input2.value), devePrintar, frase);
        }
    })
}