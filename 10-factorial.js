function factorial(n) {
  if (isNaN(n)) return 1;
  n = parseInt(n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const input = process.argv[2];
console.log(factorial(input));
