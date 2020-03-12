// given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

// for example
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// function containsCommonItem(arr1, arr2) {
// 	// O(n^2) aka O(a*b maybe)
// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = 0; j < arr2.length; j++) {
// 			if (arr1[i] === arr2[j]) {
// 				console.log(true);
// 				return true;
// 			}
// 		}
// 	}
// 	console.log(false);
// 	return false;
// }

// containsCommonItem(array1, array2);

// better solution
// convert array to object
// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true,
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
	// O(a+b)
	// loop though first array and create object
	// where propers === items in the array
	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
		// console.log(map);
	}
	// loop through 2nd arrayu and check if item in second array exists on created object
	for (let j = 0; j < arr2.length; j++) {
		// console.log(j);
		if (map[arr2[j]]) {
			// console.log(map);
			// console.log(j);
			return true;
		}
	}
	return false;
}

containsCommonItem2(array1, array2);

function containsCommonItem3(array1, array2) {
	return array1.some(item => array2.includes(item)); // https://www.w3schools.com/jsref/jsref_some.asp
}

containsCommonItem3(array1, array2);
