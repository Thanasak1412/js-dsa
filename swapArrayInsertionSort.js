(() => {
  // Insertion sort

  function insertionSort(nums) {
    if (!nums.length) return [];

    for (let i = 1; i < nums.length; i++) {
      let numberToInsert = nums[i];
      let j = i - 1;

      while (j >= 0 && nums[j] > numberToInsert) {
        nums[j + 1] = nums[j];
        j = j - 1;
      }

      nums[j + 1] = numberToInsert;
    }
  }

  const nums = [8, 20, -2, 4, -6];

  console.log("insertionSort => ", insertionSort(nums));

  //   Big O
  // Time Complexity = O(N^2)
})();
