//map com this
const meuArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const maca = {
    value: 2
}
const pera = {
    valeu: 4
}


function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * 3;
    }, thisArg);
} 

//console.log(mapComThis(meuArray, maca));

//map sem this
function mapSemThis(arra) {
    return arra.map((item) => item *5);
}

console.log(mapSemThis(meuArray));