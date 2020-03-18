// You are given an array of integers [10,20,35,50,75,80] and a target value k (70)
// Check to see if 2 numbers in the array add up to the value of k.
// Otherwise return null
// The array may contain negative numbers
// The array will always be sorted
// Return an array in ascending order
// You must solve with an 0(n) Time complexity
const findTwoNumberSum = (array, k) => {
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		if (array[i] + array[j] == k) {
			return [array[i], array[j]];
		} else if (array[i] + array[j] < k) {
			i++;
		} else {
			j--;
		}
	}
	return null;
};
findTwoNumberSum([-8, -7, -5, -3, 0, 2, 4, 7], -2);
// Notes
// returnArr = []
// loop through the numbers
//
// Tests
// ( [10,20,35,50,75,80], 70) → (20, 50)
// ([-10, -8, -5, -3, 0, 9,11,32,40], 35) → (-5, 40)
// ([-8, -7, -5, -3, 0, 2, 4, 7], -2) → null
// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr.length; j++){

//   }
// }
// let i = 0
// let j = arr.length -1
// while(i < j){
// }
