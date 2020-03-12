const {performance} = require('perf_hooks')


const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const fish = ['dory', 'bruce', 'marlin', 'nemo'];

const large = new Array(10000).fill('nemo')

function findNemo(array) {

	let t0 = performance.now();

	for (let i = 0; i < array.length; i++) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
		if (array[i] === 'nemo') {
			console.log('found Nemo!');
		}
	}

	let t1 = performance.now();
	// console.log(t1)
	console.log('Call to find nemo took ' + (t1-t0) + ' milliseconds')
}

// we can plug in nemo, everyone, fish large
findNemo(large); // 0(n) --> linear time
