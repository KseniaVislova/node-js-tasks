var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (data) {
  input.push(data);
  if(input.length > 1) {
    rl.close();
  }
});

rl.on('close', function (cmd) {
  const [firstNum, secondNum] = input.map(item => +item);
  const result = firstNum + secondNum;
  console.log(`${result}`);
  process.exit(0);
});
