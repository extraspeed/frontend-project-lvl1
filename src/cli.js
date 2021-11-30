import readlineSync from 'readline-sync';

let userName;

export function getUserName() {
  return userName;
}

export function greetingUser() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
