(() => {
  //  Find Index of array with Binary Search

  function findIndex(nums, target) {
    if (!nums.length) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const midPoint = Math.floor((left + right) / 2);

      if (nums[midPoint] === target) return midPoint;
      else if (nums[midPoint] > target) right = midPoint;
      else left = midPoint + 1;
    }
  }

  const nums = [-5, 2, 4, 6, 10];
  const target = 2;

  console.log("findIndex => ", findIndex(nums, target));

  //   Big o
  // Time Complexity = O(LogN)
  // Space Complexity = O(1)
})();
