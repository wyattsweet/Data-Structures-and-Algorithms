function fizzBuzz(x) {
  let num = 1;
  let string = '';
  while (num <= x) {
    let log = num;
    if (num % 3 === 0) {
      log = 'fizz'              
    }

    if (num % 5 === 0) {
      log = log === 'fizz' ? `${log}buzz` : 'buzz';
    }

    string = !string ? `${log}` : `${string} ${log}`
    num++;
  }
  return string;
}

module.exports = fizzBuzz;
