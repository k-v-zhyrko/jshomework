console.log('Task 2')

function getArray() {
	const amount = 12;
	const A = []; 
	for (let i = 1; i <= amount; i += 3) { 
		const B = [i, i+1, i+2]; 
		A.push(B); 
	}
	console.log(A); 
}

getArray();