const fs = require('fs');

const countStudents = file_name => {
    const rs = fs.createReadStream(file_name, { encoding: 'utf8' });
    let isFirstLine = true;
    // Event listener for reading data
    rs.on('data', function(data) {
        const lines = data.split('\n');
        const obj = {}
        count = 0;
        lines.forEach(function(line) {
            // Do whatever you want with the line
            if (isFirstLine) {
                // Skip the first line
                isFirstLine = false;
                return;
            }
            line_items = line.split(',')
            const subject = line_items[3].replace(/\r/g, '');
            if (obj.hasOwnProperty(subject)) {
                obj[subject].student.push(line_items[0]);
            } else {
                obj[subject] = {
                    student: [line_items[0]]
                };
            }
            count++;
        });
        console.log(`Number of students: ${count}`);
        Object.keys(obj).forEach(function(key) {
            console.log(`Number of students in ${key}: ${obj[key].student.length}. List: ${obj[key].student.join(', ')}`);
        });
        // console.log(obj)
    })

    // Event listener for error handling
    rs.on('error', function(err) {
        throw new Error('Cannot load the database');
    });
}

module.exports = countStudents