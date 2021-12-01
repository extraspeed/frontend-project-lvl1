import random from '../random.js';

function generateExpression() {
  const num1 = random(0, 50);
  const num2 = random(0, 50);
  const operation = random(0, 3);

  let operationStr;
  let result;

  if (operation === 0) {
    operationStr = '+';
    result = num1 + num2;
  } else if (operation === 1) {
    operationStr = '-';
    result = num1 - num2;
  } else {
    operationStr = '*';
    result = num1 * num2;
  }

  return [
    num1,
    num2,
    operationStr,
    result,
  ];
}

export default class CalcGame {
  rules = 'What is the result of the expression?';

  static createQuestion() {
    const [num1, num2, operation, result] = generateExpression();
    return {
      text: `${num1} ${operation} ${num2}`,
      answer: result.toString(),
    };
  }
}
