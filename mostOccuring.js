// You have an array = [2,3,4,5,2,3,3,3,3,6,6]
// You need to remove whatever number occurs the most.
// return value should == [3,3,3,3,3]
function findMostOccuring(arr) {
	let mostOccuring = {};

	for (let i = 0; i < arr.length; i++) {
		currentNum = arr[i];
		if (mostOccuring[currentNum] !== undefined) {
			mostOccuring[currentNum]++;
		} else {
			mostOccuring[currentNum] = 1;
		}
	}
	console.log(mostOccuring);
	let newArray = Object.values(mostOccuring);
	let max = Math.max(...newArray);
	for (key in mostOccuring) {
		if (mostOccuring[key] === max) {
			return (newArray = new Array(max).fill(key));
		}
	}
}

console.log(findMostOccuring([3, 2, 4, 5, 2, 3, 3, 3, 3, 6, 6, 2]));
