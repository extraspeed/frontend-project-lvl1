function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getGcd(a, b) {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
}

export default class GCDGame {
  rules = 'Find the greatest common divisor of given numbers.';

  static createQuestion() {
    const num1 = getRandomInt(100) + 1;
    const num2 = getRandomInt(100) + 1;

    return {
      text: `${num1} ${num2}`,
      answer: getGcd(num1, num2).toString(),
    };
  }
}
