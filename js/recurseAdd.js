const factorial = (n) => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

// 1 1 2 3 5 8 13 21 34

const fibo = (n) => {
  if (n <= 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
};

// console.log(factorial(5));
console.log(fibo(2));
