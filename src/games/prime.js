import random from '../random.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export default class PrimeGame {
  rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  static createQuestion() {
    const num = random(1, 500);
    return {
      text: num,
      answer: isPrime(num) ? 'yes' : 'no',
    };
  }
}
