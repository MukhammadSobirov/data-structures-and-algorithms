// Using Hoare's partitioning scheme
const partition = function (nums: number[], low: number, high: number) {
  // Initializing pivot's index to low
  const pivotValue = nums[low];
  let i = low;
  let j = high;

  // Loop till i pointer crosses j pointer
  while (i < j) {
    // Increment the 'i' pointer till it finds an element greater than pivot
    while (i <= high && nums[i] <= pivotValue) {
      i++;
    }
    // Decrement the 'j' pointer till it finds an element less than pivot
    while (nums[j] > pivotValue) {
      j--;
    }
    // Swap the numbers on 'i' and 'j'
    if (i < j) {
      // Swap pivot element with element on 'j' pointer.
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }

  nums[low] = nums[j];
  nums[j] = pivotValue;

  // return the pivot index
  return j;
};

// Recursive function implementing QuickSort
const quickSortRec = function (nums: number[], low: number, high: number) {
  if (high > low) {
    const pivotIndex = partition(nums, low, high);
    console.log(`pivot: ${pivotIndex}`);

    console.log(`step 1: ${nums}`);

    // Sort elements before partition
    quickSortRec(nums, low, pivotIndex - 1);
    console.log(`step 2: ${nums}`);

    // Sort elements after partition
    quickSortRec(nums, pivotIndex + 1, high);
    console.log(`step 3: ${nums}`);
  }
};

const quickSort = function (nums: number[]) {
  quickSortRec(nums, 0, nums.length - 1);
};

const nums_list = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3];

quickSort(nums_list);
