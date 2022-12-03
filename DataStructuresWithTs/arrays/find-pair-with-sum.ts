/*
 ? We’re given an array of integers and a value. Determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists; otherwise, return false.
*/

const findSumOfTwo = (nums: number[], val: number) => {
  const hash = new Set();

  let isFound = false;
  let i = 0;
  while (i < nums.length && isFound === false) {
    const target = val - nums[i];

    if (hash.has(target)) {
      return (isFound = true);
    }
    hash.add(nums[i]);

    i++;
  }

  return isFound;
};

const input = [5, 7, 1, 2, 8, 4, 3];
const val = 3;

const result = findSumOfTwo(input, val);
console.log(result);
