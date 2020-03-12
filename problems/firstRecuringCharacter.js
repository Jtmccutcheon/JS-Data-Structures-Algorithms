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

console.log(firstRecurringCharacter(case1));
console.log(firstRecurringCharacter(case2));
console.log(firstRecurringCharacter(case3));

function firstRecurringCharacter() {}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
