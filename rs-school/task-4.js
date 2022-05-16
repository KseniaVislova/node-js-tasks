const { stdout, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-d', '-f'];
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -d или -f');
    exit();
}

if (flag === '-d') {
  console.log(__dirname);
}
if (flag === '-s') {
  console.log(__filename);
}
exit();