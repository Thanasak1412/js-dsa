(() => {
  // Recursive Factorial

  function factorial(n) {
    if (!n) return 1;

    return n * factorial(n - 1);
  }

  console.log("factorial => ", factorial(4));
})();
