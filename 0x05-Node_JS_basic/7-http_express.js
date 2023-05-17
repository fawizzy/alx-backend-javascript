const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');

      lines.forEach((line) => {
        const [name, age, field, location] = line.split(',');

        if (!students[field]) {
          students[field] = [];
          fields[field] = 0;
        }

        students[field].push(name);
        fields[field]++;
        length++;
      });

      const output = [`Number of students: ${length}`];
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          output.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
      }

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const fileName = process.argv[2];
  if (!fileName) {
    response.send('This is the list of our students\nCannot load the database');
    return;
  }

  countStudents(fileName)
    .then((output) => {
      response.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      response.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
