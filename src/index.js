module.exports = toReadable = number => {
	// 0-9
	// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
	// 20, 30, 40, 50, 60, 70, 80, 90
	// 100, 200, 400, 500
	if (number === 0) return 'zero';
	const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const three = ['666', '666', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	// 919
	let res = [];
	if (number >= 100) {
		let big = Math.floor(number / 100);
		if (big >= 1) {
			res.push(one[big]);
		}
		res.push('hundred');
		number %= 100;
	}
	if (number >= 20) {
		let big = Math.floor(number / 10);
		res.push(three[big]);
		number %= 10;
	}

	if (number >= 10) {
		let big = number % 10;
		res.push(two[big]);
		number %= 10;
	} else if (number > 0) {
		res.push(one[number]);
	}
	return (res.join(' '));
}
