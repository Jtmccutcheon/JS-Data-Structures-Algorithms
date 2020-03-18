const basket = ['apples', 'grapes', 'pears'];

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

// prepend O(1)
// append O(1)
// loopup O(n)
// insert O(n)
// delete O(n)
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head; // the tail is the head for the first item
		this.length = 1; // 1 item when we pass in first value
	}
	append(value) {
		// add to tail
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length += 1;
		return this;
	}
	prepend(value) {
		// add to head
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length += 1;
		return this;
	}
	printList() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}
	insert(index, value) {
		// check params
		if (index === 0) {
			return this.prepend(value);
		}
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}
	traverseToIndex(index) {
		//check params
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
