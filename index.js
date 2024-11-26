const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => (counts[el] = counts[el] ? counts[el] + 1 : 1));
  console.log(counts);
  return counts;
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  // console.log(getMode(numbers));

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
