// array

// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

const string = ["a", "b", "c", "d"];

// push
string.push("e"); // O(1)

// pop off that e
string.pop(); // O(1)

// unshift
string.unshift("x");

// splice
string.splice(2, 0, "alien"); // O(n/2) --> O(n)

console.log(string[2]);

console.log(string);
