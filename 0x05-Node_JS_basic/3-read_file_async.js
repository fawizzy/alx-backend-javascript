const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');

        for (let i = 0; i < lines.length; i++) {
          if (lines[i]) {
            length++;
            const field = lines[i].split(',');

            if (students[field[3]]) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            if (fields[field[3]]) {
              fields[field[3]]++;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const totalStudents = length - 1;
        console.log(`Number of students: ${totalStudents}`);

        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
