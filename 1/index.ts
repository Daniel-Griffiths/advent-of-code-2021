import { values } from "./values";

const scan = (values: number[]): number =>
  values.reduce((total, currentValue, currentIndex) => {
    if (currentIndex === 0) return 0;
    const previousValue = values[currentIndex - 1] || 0;
    return currentValue > previousValue ? total + 1 : total;
  }, 0);

const chunkedValues = values.map((currentValue, currentIndex) => {
  const secondValue = values[currentIndex + 1] || 0;
  const thirdValue = values[currentIndex + 2] || 0;
  if (!thirdValue) return 0;
  return currentValue + secondValue + thirdValue;
}, 0);

console.log({
  partOneAnswer: scan(values),
  partTwoAnswer: scan(chunkedValues),
});
