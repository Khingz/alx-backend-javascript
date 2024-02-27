const fs = require('fs');

function countStudents(path) {
	let content;
	isFirstLine = true;
	try {
    		content = fs.readFileSync(path, 'utf8');
  	} catch (err) {
    		throw new Error('Cannot load the database');
  	}
	const data = content.split('\n');
	const obj = {};
	count = 0;
	data.forEach(function(line) {
		if (isFirstLine) {
			// Skip the first line
                	isFirstLine = false;
                	return;
		}
		line_items = line.split(',');
		if (obj.hasOwnProperty(line_items[3])) {
			obj[line_items[3]].student.push(line_items[0]);
		} else {
			obj[line_items[3]] = {
				student: [line_items[0]]
			}
		}
		count++;
	});
	console.log(`Number of students: ${count}`);
	Object.keys(obj).forEach(function(key) {
		console.log(
			`Number of students in ${key}: ${obj[
				key
			].student.length}. List: ${obj[
				key
			].student.join(', ')}`
		);
	})
}

module.exports = countStudents;
