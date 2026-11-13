function fibonacciRec(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
  }
}

const arraryFibs = (n) => {
  let series = new Array(n);

  series.fill(0);

  for (let i = 2; i <= n; i++) {
    series[i - 1] = fibonacciRec(i);
  }

  console.log(series);
};
const fibonacci = (n) => {
  let series = new Array(n);

  series.fill(0);

  series[0] = 0;

  series[1] = 1;

  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  console.log(series);
};

console.log("iteration fib");
fibonacci(8);
console.log("RecFib");
arraryFibs(8);
