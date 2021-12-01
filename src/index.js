import readlineSync from 'readline-sync';
import { greetingUser, getUserName } from './cli.js';

const GAMES_COUNT = 3;

export default (gameInstance) => {
  greetingUser();
  console.log(gameInstance.rules);
  for (let i = 0; i < GAMES_COUNT; i += 1) {
    const question = gameInstance.constructor.createQuestion();

    console.log(`Question: ${question.text}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === question.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log(`Let's try again, ${getUserName()}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getUserName()}!`);
};
