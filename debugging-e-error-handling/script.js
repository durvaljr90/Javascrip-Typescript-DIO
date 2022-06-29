
function validaArray(array, num) {
    try {
        if(!array && !num) throw new ReferenceError("Entre com os parâmetros!!!");

        if(typeof array !== 'object') throw new TypeError("O valor de Array precisa ser do tipo objeto");
    
        if(typeof num !== 'number') throw new TypeError("O valor de Numero precisa ser do tipo Number");
    
        if(array.length !== num) throw new RangeError("Tamanho inválido!");
    
        return array;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um erro do tipo ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este é um erro do tipo TypeError!");
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Este é um erro do tipo RangeError!");
            console.log(e.name);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray([1,2,3,4,5], 5));