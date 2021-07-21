class Students {
	constructor () {};


#student = [];


get showStudent () {
	return this.#student;
}

createStudent(obj) {
	return this.#student.push(obj);
}
updateStudent() {

}
removeStudent(i) {
	delete this.#student[i];
	
}
}

module.exports = Students;