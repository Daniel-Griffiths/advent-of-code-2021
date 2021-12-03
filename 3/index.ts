import { values } from "./values";

const calculateDigits = (values: number[][], isBitFlipped: boolean) =>
  values
    .reduce((previousDigit, currentDigits) => {
      currentDigits.map((digit, i) => {
        if (!previousDigit[i]) previousDigit[i] = 0;
        previousDigit[i] += digit === 1 ? 1 : -1;
      });

      return previousDigit;
    })
    .map((digit) => (digit > 0 ? (isBitFlipped ? 0 : 1) : isBitFlipped ? 1 : 0))
    .join("");

const gammaRate = parseInt(calculateDigits(values, false), 2);
const epsilonRate = parseInt(calculateDigits(values, true), 2);

console.log({ partOneAnswer: gammaRate * epsilonRate });
