export default function getRandomInt(min = 0, max = 2) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
