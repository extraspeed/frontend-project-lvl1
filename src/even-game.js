import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';

const GAMES_COUNT = 3;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNumberEven(num) {
  return num % 2 === 0;
}

export default function evenGameStart() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < GAMES_COUNT; i += 1) {
    const number = getRandomInt(1000);
    const isEven = isNumberEven(number);

    console.log(`Question: ${number}`);
    const answerStr = readlineSync.question('Your answer: ');
    let answer;

    if (answerStr === 'yes') {
      answer = true;
    } else if (answerStr === 'no') {
      answer = false;
    }

    if (answer === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was ${isEven ? '\'yes\'' : '\'no\''}.`);
      console.log(`Let's try again, ${getUserName()}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getUserName()}!`);
}
