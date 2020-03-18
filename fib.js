function fibonacci(n) {
	// [0, 1, 1, 2, 3, 5, 8, 13]
	let arr = [0, 1];
	let a = 0;
	let b = 1;
	let c = 1;
	for (let i = 1; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
		arr.push(c);
		console.log(arr);
	}
	return arr;
}

fibonacci(8);
