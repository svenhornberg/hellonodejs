const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse(str) {
  return str.split('').reverse().join('');
}
readline.question('What should be reversed? ', (name) => {
  console.log(reverse(name));
  readline.close();
});
