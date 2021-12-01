function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNumberEven(num) {
  return num % 2 === 0;
}

export default class EvenGame {
  rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  static createQuestion() {
    const number = getRandomInt(1000);
    return {
      text: number,
      answer: isNumberEven(number) ? 'yes' : 'no',
    };
  }
}
