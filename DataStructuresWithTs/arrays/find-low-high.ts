/*
    ! Statement:
    * We’re given a sorted array of integers, nums, and an integer value, target.
    * Return the low and high index of the given target element.
    * If the indexes are not found, return -1.
*/

/*
    ! Solution 1: Using simple iteration
    * Time complexity: O(n)
*/
function findLowIndex(target: number, arr: number[]) {
  let low = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      low = i;
      continue;
    }
  }
  return low;
}

function findHighIndex(target: number, arr: number[]) {
  let high = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      high = i;
      continue;
    }
  }
  return high;
}

const nums = [
  5, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 5,
];
const target = 5;

const highest = findHighIndex(target, nums);
const lowest = findLowIndex(target, nums);

console.log(`Low index: ${lowest}\nHigh index: ${highest}`);

/*
    ! Solution 2: Using Binary search
    * Time Complexity: O(logn)
 */

const findLowIndexBinary = function (nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {
    const midElem = nums[mid];

    // Target value is less than the middle value
    if (midElem < target) {
      low = mid + 1;
    } else {
      // Target value is greater than or equal to the middle value
      high = mid - 1;
    }
    // Updating the mid value
    mid = low + Math.floor((high - low) / 2);
  }

  if (low < nums.length && nums[low] === target) {
    return low;
  }

  return -1;
};

const findHighIndexBinary = function (nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {
    const midElem = nums[mid];

    if (midElem <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (high === -1) {
    return high;
  }

  if (high < nums.length && nums[high] === target) {
    return high;
  }

  return -1;
};
