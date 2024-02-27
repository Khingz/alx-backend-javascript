const express = require('express');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let text = 'Hello Holberton School!\n';
  try {
    const data = await countStudents(db);
    text += `${data.join('\n')}`
    res.send(text);
  } catch (err) {
    text += `${err.message}\n`;
    res.send(text);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;