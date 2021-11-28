import readlineSync from 'readline-sync';

export function greetingUser() {
    const user_name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${user_name}`);
}