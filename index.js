function sum(a=10, b=39, ...rest) {
	var sum = a + b;
	for (let i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return sum;
}

function div(a,b){
	return a/b;
}

function mod(a,c) {
	return a%c;
}


