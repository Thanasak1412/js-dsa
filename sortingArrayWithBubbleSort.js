(() => {
  // Sorting Array with Bubble sort

  function bubbleSort(nums) {
    if (!nums.length) return [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) swap(nums, j, j + 1);
      }
    }

    return nums;
  }

  function swap(nums, i, j) {
    const temp = nums[i];

    nums[i] = nums[j];
    nums[j] = temp;
  }

  const nums = [-6, 20, 8, -2, 4];

  console.log("bubbleSort => ", bubbleSort(nums));

  //   Big O
  // Time Complexity = O(N^2)
})();
