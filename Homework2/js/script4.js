console.log('Task 4');

function minSum(arr) {
    let min1 = arr[0]; 
    let min2 = arr[1]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < min1) { 
            min2 = min1; 
            min1 = arr[i]; 
        }
        else if (arr[i] < min2) { 
            min2 = arr[i]; 
        }
    }
    return min1+min2;
}

console.log(minSum([19, 5, 42, 2, 77]));
console.log(minSum([10, 800, 3453000, 8010]));
console.log(minSum([12, 898, 899, 900]));