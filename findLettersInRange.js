// You have an array of letters ["a", "c", "l", "r", "p", "b"]
// and a matrix [["a", "s"], ["d", "t"], ["j","q"]]
// Find the letters in the first array that are between all of the given matrix letters and
// return them in an array -> Answer should be ["l", "p"]

let lettersArr = ['a', 'c', 'l', 'r', 'p', 'b'];
let matrix = [
	['a', 's'],
	['d', 't'],
	['j', 'q'],
];

function findCoolLetters(matr, arr) {
	coolLetters = [];
	ascArr = [];
	ascMatr = [];
	arr.map(char => {
		// console.log(char);
		ascArr.push(char.charCodeAt(0));
	});
	// console.log(ascArr);
	matr.map(char => {
		// console.log(char);
		tempArr = [];
		tempArr.push(char[0].charCodeAt(0));
		tempArr.push(char[1].charCodeAt(0));
		ascMatr.push(tempArr);
	});
	// console.log(ascMatr);
	for (let i = 0; i < ascMatr.length; i++) {
		// console.log(ascArr[i]);
		console.log(ascMatr[i][0]);

		// if (ascArr[i] > ascMatr[i][0] && ascArr[i] <= ascMatr[i][1]) {
		// 	if (
		// 		ascArr[i] > ascMatr[i + 1][0] &&
		// 		ascArr[i] <= ascMatr[i + 1][1]
		// 	) {
		// 		if (
		// 			ascArr[i] > ascMatr[i + 2][0] &&
		// 			ascArr[i] <= ascMatr[i + 2][1]
		// 		) {
		// 			return;
		// 		}
		// 	}
		// }
	}

	// return coolLetters;
}

console.log(findCoolLetters(matrix, lettersArr));
