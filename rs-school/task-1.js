const { stdin, stdout } = process;

stdout.write('Как тебя зовут?\n');
stdin.on('data', data => {
  const dataStringified = data.toString();
  stdout.write('Привет, ');
  stdout.write(dataStringified.toUpperCase());
  process.exit();
});
process.on('exit', () => stdout.write('Удачи!'));