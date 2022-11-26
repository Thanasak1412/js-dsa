(() => {
  // Linear Search

  function findIndex(nums, target) {
    if (!nums.length) return -1;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }

    return -1;
  }

  function findIndex2 (nums, target) {
    if (!nums.length) return -1;

    for (let i in nums) {
        if (nums[i] === target) return i;
    }

    return -1;
  }

  const nums = [-5, 2, 10, 4, 6];
  const target = 4;

  console.log("findIndex => ", findIndex(nums, target));
  console.log("findIndex2 => ", findIndex2(nums, target));

//   Big O
// Time complexity = O(N)
// Space Complexity = O(1)
})();
