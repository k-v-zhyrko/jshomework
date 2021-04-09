console.log('Task 5')

function toDec(arr) { 
    let num = 0; 
    let p2 = 1; 
    for (let i = arr.length - 1; i >= 0; i--) { 
        num += p2 * arr[i]; 
        p2 *= 2; 
    }
    return num;
}


console.log(toDec([0, 0, 0, 1]))
console.log(toDec([0, 0, 1, 0]))
console.log(toDec([0, 1, 0, 1]))
console.log(toDec([1, 0, 0, 1]))
console.log(toDec([0, 0, 1, 0]))
console.log(toDec([0, 1, 1, 0]))
console.log(toDec([1, 1, 1, 1]))
console.log(toDec([1, 0, 1, 1]))
console.log(toDec([1, 0, 0, 0, 1]))
console.log(toDec([1, 0, 0, 1, 0]))
console.log(toDec([1, 0, 1, 0, 1]))
console.log(toDec([1, 1, 1, 0, 0, 1]))