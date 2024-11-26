const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);
// const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
// console.log(oddListMedian);
// const evenListMedian = getMean([
//   testArr2[testArr2.length / 2],
//   testArr2[testArr2.length / 2] - 1,
// ]);
// console.log(evenListMedian);

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
