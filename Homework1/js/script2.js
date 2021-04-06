console.log('Task 2')
let f = 1; 
let formula = '10! = ' 
for (i = 10; i >= 1; i--) { 
    formula += i; 
    if (i != 1) { 
        formula +=  '*';
    }
    f *= i; 
}
console.log(formula+' = '+f); 