(() => {
  // Find the index of target in the array

  function findIndex(nums, target) {
    return search(nums, target, 0, nums.length - 1);
  }

  function search(nums, target, left, right) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) return search(nums, target, left, mid);
    else return search(nums, target, mid + 1, right);
  }

  const nums = [-5, 2, 4, 6, 10];
  const target = 10;

  console.log("findIndex => ", findIndex(nums, target));
})();
