console.log('Task 5')

const medianNumber = 6;
const len = medianNumber*2-1; 

for (i = 1; i <= medianNumber; i++) { 
    let str = ''; 
    let k = (2*i-1 - (2*i-1)%2)/2; 
    let med = (len - len%2)/2; 
    for (j = 0; j < len; j++) { 
        if (j >= med-k && j <= med+k) { 
            str += '#';
        }
        else { 
            str += '-';
        }
    }
    console.log(str);   
}