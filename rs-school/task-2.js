const { stdin, stdout } = process;

stdout.write('Как тебя зовут?\n');
stdin.on('data', data => {
  const dataStringified = data.toString();
  stdout.write(dataStringified.split('').reverse().join(''));
  process.exit();
});