// ? Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.
function countSubsetSum(nums: number[], sum: number): number {
  let sumOfSets = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(
        `i ${i} = ${nums[i]}; j ${j} = ${nums[j]}; operation result = ${
          nums[i] + nums[j]
        } | sum = ${sum}`
      );

      if (nums[i] + nums[j] === sum) {
        console.log('Match!');

        sumOfSets += 1;
      }
    }
  }
  return sumOfSets;
}

console.log(`Sum of subsets 1 -------> ${countSubsetSum([1, 1, 2, 3], 4)}`);
console.log(`Sum of subsets 2 -------> ${countSubsetSum([1, 2, 7, 1, 5], 9)}`);
