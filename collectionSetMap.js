(() => {
  // Sets

  const set = new Set([1, 1, 2, 3, 4, 4, 5]);

  for (const number of set) {
    console.log("number => ", number);
  }

  //   Map

  const map = new Map([
    ["a", 1],
    ["b", "2"],
  ]);

  for (const [key, value] of map) {
    console.log("key => ", key);
    console.log("value => ", value);
  }
})();
