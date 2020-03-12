//https://en.wikipedia.org/wiki/Hash_table
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html <--- viusal rep of hash tables

let user = {
	age: 69,
	name: 'justin',
	magic: true,
	scream: function() {
		console.log('aahhh!');
	},
};

user.age; // o(1)
user.spell = 'abra kadabra'; // o(1)
// console.log(user)
// user.scream(); // o(1)

// Maps
const a = new Map();
// maps will allow datatypes as keys

// Sets
const b = new Set();
// only stores keys

//creating hashtable
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
			// console.log(hash);
		}
		return hash;
	}
	// create new key value pair
	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push(key, value);
		// console.log(this.data);
		return this.data;
	}
	// return key and value
	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		console.log(currentBucket);
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					console.log(currentBucket[i][1]);
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}
	// this will allow us to loop through keys
	// keys() {
	// 	const keysArr = [];
	// 	for (let i = 0; i < this.data.length; i++) {
	// 		if (this.data[i]) {
	// 			console.log(this.data[i][0]);
	// 			keysArr.push(this.data[i][0]);
	// 		}
	// 	}
	// 	console.log(keysArr);
	// 	return keysArr;
	// }
	// keys w/o collision
	keys() {
		if (!this.data.length) {
			return undefined;
		}
		let result = [];
		// loop through all the elements
		for (let i = 0; i < this.data.length; i++) {
			// if it's not an empty memory cell
			if (this.data[i] && this.data[i].length) {
				// but also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0]);
					}
				} else {
					result.push(this.data[i][0]);
				}
			}
		}
		return result;
	}
}

const myHashTable = new HashTable(50);
// myHashTable._hash('grapes');
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
myHashTable.set('oranges', 2);
myHashTable.keys();
