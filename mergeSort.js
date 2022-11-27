(() => {
  // Merge Sort Algorithm

  function mergeSort(nums) {
    if (!nums.length) return [];
    if (nums.length < 2) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const sortedNumber = [];

    while (left.length && right.length) {
      left[0] <= right[0]
        ? sortedNumber.push(left.shift())
        : sortedNumber.push(right.shift());
    }

    return [...sortedNumber, ...left, ...right];
  }

  const nums = [8, 20, -2, 4, -6];

  console.log("mergeSort => ", mergeSort(nums));

  //   Big O
  // Time Complexity = O(NLogN)
})();
