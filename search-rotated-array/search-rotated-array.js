// JavaScript
const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  if (start > end) {
    return -1;
  }

  while (start <= end) {
    // находим середину массива
    let mid = start + Math.floor((end - start) / 2);

    console.table({ start: nums[start], mid: nums[mid], end: nums[end], target });
    // на случай если цель находится в середине массива
    if (nums[mid] == target) {
      return mid;
    }

    // сортировка с начала до середины массива
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // сортировка с середины до конца массива
    else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let targetList = [3, 6, 3, 6];
let numsList = [
  [6, 7, 1, 2, 3, 4, 5],
  [6, 7, 1, 2, 3, 4, 5],
  [4, 5, 6, 1, 2, 3],
  [4, 5, 6, 1, 2, 3],
];

for (let i = 0; i < targetList.length; i++) {
  console.log("   target " + targetList[i] + " found at index " + binarySearch(numsList[i], targetList[i]));
  console.log("----------------------------------------------------------------------------------------------------\n");
}
