var readline = require('readline');

var count = -1;
var input = 0;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (data) {
  if(data.length === 1) {
    input = +data;
    count += 1;
  } else {
    count += 1;

    let arr = data.split('').sort();
    if(arr[0] === arr[1] && arr[2] === arr[3] && arr[1] !== arr[2]) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }

  if(count === input) {
    rl.close();
  }
});

rl.on('close', function (cmd) {
  process.exit(0);
});
