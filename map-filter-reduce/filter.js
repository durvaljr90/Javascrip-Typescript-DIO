function filtraPares(arr) {
    return arr.filter(function(pares){
        return pares % 2 === 0
    })
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(filtraPares(nums));