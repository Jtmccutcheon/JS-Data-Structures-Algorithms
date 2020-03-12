// create a function that  revereses a string:
// "hi my name is justin" should be
// "nitsuj si enam ym ih"

// const reverse = str => {
// 	// check input
// };

// function reverse(str) {
// 	if (!str || str.length < 2 || typeof str !== 'string') {
// 		return 'hmm this is not good';
// 	}

// 	const backwards = [];
// 	const totalItems = str.length - 1;

// 	for (let i = totalItems; i >= 0; i--) {
// 		backwards.push(str[i]);
// 	}
// 	console.log(backwards);
// 	console.log(backwards.join(''));

// 	return backwards.join('');
// }

// reverse('hi my name is justin');

// function reverse2(str) {
// 	return str
// 		.split('')
// 		.reverse()
// 		.join('');
// }

// console.log(reverse2('hi my name is justin'));

// es6
const reverse3 = str => [...str].reverse().join('');
console.log(reverse3('hi my name is justin'));
