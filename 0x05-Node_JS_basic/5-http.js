const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
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

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    const fileName = process.argv[2];
    if (!fileName) {
      response.statusCode = 404;
      response.end('Cannot load the database');
      return;
    }

    countStudents(fileName)
      .then((output) => {
        const outString = output.slice(0, -1);
        response.end(outString);
      })
      .catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/`);
});

module.exports = server;
