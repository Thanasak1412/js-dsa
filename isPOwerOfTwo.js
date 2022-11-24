(() => {
  // Power of two

  function isPowerOfTwoWithBitwise(n) {
    if (n < 1) return false;

    return (n & (n - 1)) === 0;
  }

  console.log("isPowerOfTwoWithBitwise => ", isPowerOfTwoWithBitwise(5));
  console.log("isPowerOfTwoWithBitwise => ", isPowerOfTwoWithBitwise(1));
})();
