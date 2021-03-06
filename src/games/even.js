import random from '../random.js';

function isNumberEven(num) {
  return num % 2 === 0;
}

export default function createQuestion() {
  const number = random(0, 1000);
  return {
    text: number,
    answer: isNumberEven(number) ? 'yes' : 'no',
  };
}
