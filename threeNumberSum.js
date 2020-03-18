// example 1:
// input [12, 3, 1, 2, -6, 5, -8, 6], 0
// expected output [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// if no such triplets exist return []

function threeNumberSum(arr, target) {
	arr.sort();
	let newArr = [];
	let oneSet = [];
	let triplets = [];

	// 3 loops with pointer at next index
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			for (let k = 2; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === target) {
					oneSet.push([arr[i], arr[j], arr[k]]);
					// console.log(oneSet);
					// triplets.push(oneSet);
					// console.log(triplets);
					newArr.push(oneSet);
				}
			}
		}
	}

	console.log(newArr);
	return newArr;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
