const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
    exit();
}
stdout.write('Введите, пожалуйста, два числа\n');

stdin.on('data', (data) => {
  let str = data.toString();
  const arr = str.split(' ');

  const hasIncorrectLength = arr.length !== 2;
  const hasIncorrectValues = arr.some(item => Number.isNaN(+item));
  if (hasIncorrectLength || hasIncorrectValues) {
      stdout.write('Нужно ввести 2 числа, разделенных пробелом');
      exit();
  }

  const [firstNum, secondNum] = arr.map(item => +item);

  if (flag === '-m') {
    const result = firstNum * secondNum;
    stdout.write(`${result}`);
  }

  if (flag === '-s') {
    const result = firstNum + secondNum;
    stdout.write(`${result}`);
  }

  exit();
})