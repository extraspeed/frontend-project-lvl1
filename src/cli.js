import readlineSync from 'readline-sync';

export default function greetingUser() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
}
