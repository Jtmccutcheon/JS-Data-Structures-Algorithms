//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]) {
				// console.log(input[i]);
				return input[i];
			}
		}
		return undefined;
	}
}

case1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // should return 2
case2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // should return 1
case3 = [2, 3, 4, 5]; // should return undefined
//Bonus... What if we had this:
const case4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
// return 5 because the pairs are before 2,2

// console.log(firstRecurringCharacter(case1));
// console.log(firstRecurringCharacter(case2));
// console.log(firstRecurringCharacter(case3));

function firstRecurringCharacter2(input) {
	let map = {};
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i];
		} else {
			map[input[i]] = i;
		}
		console.log(map);
	}
	return undefined;
}

// console.log(firstRecurringCharacter2(case1));
// console.log(firstRecurringCharacter2(case2));
// console.log(firstRecurringCharacter2(case3));
console.log(firstRecurringCharacter2(case4));

function firstRecurringCharacterTL(input) {
	let dict = {};
	for (let i = 0; i < input.length; i++) {
		console.log(map);
		if (!dict[input[i]]) {
			dict[input[i]] = 1;
		} else {
			return input[i];
		}
	}
	return undefined;
}

// console.log(firstRecurringCharacterTL(case1));
// console.log(firstRecurringCharacterTL(case2));
// console.log(firstRecurringCharacterTL(case3));
