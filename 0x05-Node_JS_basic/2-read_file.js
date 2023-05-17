const fs = require('fs');

function countStudents(file) {
  const student_info = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(file, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (lines[i]) {
        length++;
        const field = lines[i].split(',');

        if (student_info[field[3]]) {
          student_info[field[3]].push(field[0]);
        } else {
          student_info[field[3]] = [field[0]];
        }

        if (fields[field[3]]) {
          fields[field[3]]++;
        } else {
          fields[field[3]] = 1;
        }
      }
    }

    const total_students = length - 1;
    console.log(`Number of students: ${total_students}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${student_info[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
