// ? Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.
const canPartition = (nums: number[]): boolean => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) sum += nums[i];

  if (sum % 2 !== 0) return false;

  return canPartitionRecursive(nums, sum / 2, 0);
};

function canPartitionRecursive(
  num: number[],
  sum: number,
  currentIndex: number
): boolean {
  if (sum === 0) return true;

  if (num.length === 0 || currentIndex >= num.length) return false;

  if (num[currentIndex] <= sum) {
    if (canPartitionRecursive(num, sum - num[currentIndex], currentIndex + 1))
      return true;
  }

  return canPartitionRecursive(num, sum, currentIndex + 1);
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
