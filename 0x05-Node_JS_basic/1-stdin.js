const { spawn } = require('child_process');

const combinedCode = `
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Welcome to Holberton School, what is your name? \\n', (answer) => {
  console.log(\`Your name is: \${answer}\`);
  rl.close();
});
`;

const child = spawn('node', ['-e', combinedCode], { stdio: 'inherit' }).on('exit', (code, signal) => console.log(`This important software is now closing`));

