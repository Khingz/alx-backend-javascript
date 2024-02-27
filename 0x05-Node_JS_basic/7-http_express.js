const express = require('express');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const text = 'This is the list of our students\n';
  try {
    const data = await countStudents(db);
    res.send(`${text}${data.join('\n')}`);
  } catch (err) {
    res.send(`${text}${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
