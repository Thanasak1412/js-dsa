(() => {
  // Hash Table

  class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }

    hash(key) {
      let total = 0;

      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }

      return total % this.size;
    }

    set(key, value) {
      const index = this.hash(key);
      const bucket = this.table[index];

      if (!bucket) {
        this.table[index] = [[key, value]];
      } else {
        const sameKeyValue = bucket.find((item) => item[0] === key);

        if (sameKeyValue) sameKeyValue[1] = value;
        else bucket.push([key, value]);
      }
    }

    get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];

      if (!bucket) return undefined;
      const sameKeyValue = bucket.find((item) => item[0] === key);

      return sameKeyValue && sameKeyValue[1];
    }

    remove(key) {
      const index = this.hash(key);
      const bucket = this.table[index];

      if (!bucket) return undefined;
      const sameKeyIndex = bucket.findIndex((item) => item[0] === key);

      bucket.splice(sameKeyIndex, 1);
    }

    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) console.log(i, this.table[i]);
      }
    }
  }

  const table = new HashTable(10);

  table.set("name", "Bruce");
  table.set("age", 25);
  table.display();

  console.log(table.get("name"));

  table.set("mane", "Clark");
  table.set("name", "Diana");

  console.log(table.get("mane"));

  table.remove("name");
  table.display();
})();
