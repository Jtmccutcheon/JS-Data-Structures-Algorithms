// const a = []

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	// access data at index
	get(index) {
		return this.data[index];
	}
	// add item
	push(item) {
		// set item at index 0
		this.data[this.length] = item;
		// next item at index 1
		this.length++;
	}
	// delete last item
	pop() {
		// declare item at last index
		const lastItem = this.data[this.length - 1];
		// delete at last index
		delete this.data[this.length - 1];
		// decrement
		this.length--;
		console.log(lastItem);
		return lastItem;
	}
	// delete at index
	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
	//
	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.pop();
// newArray.delete(1);
console.log(newArray);
