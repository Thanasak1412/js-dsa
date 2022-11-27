(() => {
  // Quick Sort

  function quickSort(nums) {
    if (!nums.length) return [];
    if (nums.length < 2) return nums;

    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  const nums = [8, 20, -2, 4, -6];

  console.log("quickSort => ", quickSort(nums));
})();
