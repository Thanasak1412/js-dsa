(() => {
  // Cartesian Product

  function cartesianProduct(arr1, arr2) {
    if (!arr1.length || !arr2.length) return [];

    const result = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        const temp = [arr1[i], arr2[j]];

        result.push(temp);
      }
    }

    return result;
  }

  const arr1 = [1, 2];
  const arr2 = [3, 4, 5];

  console.log("cartesianProduct => ", cartesianProduct(arr1, arr2));

//   Big O O(N*M)
})();
