(() => {
  // Climbing Staircase

  function climbingStaircase(n) {
    if (n < 4) return n;

    const result = [1, 2];

    for (let i = 2; i < n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }

    return result[n - 1];
  }

  console.log("climbingStaircase => ", climbingStaircase(5));

//   Big O = O(N);
})();
