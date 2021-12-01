import random from '../random.js';

function getProgression() {
  const length = random(5, 11);
  const step = random(1, 20);
  const values = [];

  let start = random(1, 20);
  for (let i = 0; i < length; i += 1) {
    values.push(start);
    start += step;
  }

  return values;
}

export default function createQuestion() {
  const progression = getProgression();

  let hide = false;
  let answer;

  const filteredProgression = progression.map((x) => {
    if (!hide && random(0, 20) < 3) {
      hide = true;
      answer = x;
      return '..';
    }
    return x;
  });

  if (!hide) {
    answer = filteredProgression[progression.length - 1];
    filteredProgression[progression.length - 1] = '..';
  }

  return {
    text: filteredProgression.join(' '),
    answer: answer.toString(),
  };
}
