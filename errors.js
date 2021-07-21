class Errors{
	constructor() {};

	static noEmail() {
		throw new Error ('Email field is empty, please fill it.');
	}
	static noStudent() {
		throw new Error ('There is no student with this email');
	}
}


module.exports = Errors;