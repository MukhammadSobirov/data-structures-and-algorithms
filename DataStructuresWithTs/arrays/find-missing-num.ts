function findMissing(nums: number[]): number {
  let i = 0;
  let j = 1;
  let missing = -1;
  while (i < nums.length) {
    if (nums[i] === j) {
      j++;
      i = 0;
    } else {
      missing = j;
      i++;
    }
  }

  return missing > nums.length - 1 ? -1 : missing;
}

const input1 = [4, 0, 3, 1];
const input2 = [8, 3, 5, 2, 4, 6, 7, 1];

console.log(`#1 =====> ${findMissing(input1)}`);
console.log(`#2 =====> ${findMissing(input2)}`);
