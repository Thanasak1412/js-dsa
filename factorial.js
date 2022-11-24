(() => {
  // Factorial

  function factorial(n) {
    if (!n) return 1;
    if (n === 1) return 1;

    let result = 1,
      i;
    for (i = n; i >= 1; i--) {
      result *= i;
    }

    return result;
  }

  console.log("factorial => ", factorial(5));
})();
