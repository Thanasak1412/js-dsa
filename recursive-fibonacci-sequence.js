(() => {
  // Recursive fibonacci sequence

  function fib(n) {
    if (n < 2) return n;

    if (n !== 0) return fib(n - 1) + fib(n - 2);
  }

  console.log("fib => ", fib(3));
  console.log("fib => ", fib(6));
})();
