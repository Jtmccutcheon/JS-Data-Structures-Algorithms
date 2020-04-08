// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number
// and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

function fizzBuzz(n) {
	let counter = 0;
	while (counter < n) {
		counter++;
		// console.log(counter);
		arr.push(counter.toString());
		if (counter % 3 === 0) {
			arr.pop();
			arr.push('fizz');
		}
		if (counter % 5 === 0) {
			arr.pop();
			arr.push('Buzz');
		}
		if (counter % 3 === 0 && counter % 5 === 0) {
			arr.pop();
			arr.push('FizzBuzz');
		}
	}
	return arr;
}

console.log(fizzBuzz(15));
