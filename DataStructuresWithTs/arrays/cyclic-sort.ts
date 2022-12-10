function cyclicSort(arr: number[]): number[] {
  let i = 0;

  while (i < arr.length) {
    const j = arr[i] - 1;

    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  return arr;
}

const input1 = [3, 1, 5, 4, 2];
const input2 = [2, 6, 4, 3, 1, 5];
const input3 = [1, 5, 6, 4, 3, 2];

console.log(`#1 =====> ${cyclicSort(input1)}`);
console.log(`#2 =====> ${cyclicSort(input2)}`);
console.log(`#3 =====> ${cyclicSort(input3)}`);
